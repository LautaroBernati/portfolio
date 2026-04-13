// src/app/features/playground/playground.component.ts
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  inject,
  signal,
  ChangeDetectionStrategy,
  computed,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

export interface PlaygroundFile {
  label: string;
  path: string;
}

export interface OutputLine {
  type: 'log' | 'warn' | 'error' | 'info';
  args: string[];
}

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
  ],
  templateUrl: 'playground.component.html',
  styleUrl: 'playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  private readonly _http = inject(HttpClient);

  @ViewChild('outputEl') outputEl!: ElementRef<HTMLDivElement>;
  @ViewChild('editorEl')     editorEl!:      ElementRef<HTMLTextAreaElement>;
  @ViewChild('lineNumbersEl') lineNumbersEl!: ElementRef<HTMLDivElement>;

  public readonly files = input.required<PlaygroundFile[]>();
  public selectedFile = signal<PlaygroundFile | null>(null);
  public code = signal<string>('');
  public outputLines = signal<OutputLine[]>([]);
  public running = signal<boolean>(false);
  public readonly lineNumbers = computed(() =>
    Array.from({ length: this.code().split('\n').length }, (_, i) => i)
  );

  private _messageListener = this.onMessage.bind(this);
  private _iframe: HTMLIFrameElement | null = null;

  ngOnInit() {
    this.selectedFile.set(this.files()[0]);
    window.addEventListener('message', this._messageListener);
    this.loadFile(this.selectedFile()!);
  }

  ngOnDestroy() {
    window.removeEventListener('message', this._messageListener);
    this._iframe?.remove();
  }

  onFileChange(file: PlaygroundFile) {
    this.selectedFile.set(file);
    this.outputLines.set([]);
    this.loadFile(file);
  }

  clearOutput() {
    this.outputLines.set([]);
  }

  run() {
    this.outputLines.set([]);
    this.running.set(true);

    // Dynamically load the TypeScript compiler from CDN (cached after first load)
    this.ensureTypeScriptLoaded()
      .then(() => {
        const ts = (window as any)['ts'];
        const result = ts.transpileModule(this.code(), {
          compilerOptions: { target: 99, module: 99 },
          reportDiagnostics: true,
        });

        if (result.diagnostics?.length) {
          for (const diag of result.diagnostics) {
            const pos =
              diag.file && diag.start != null
                ? (() => {
                    const { line, character } =
                      diag.file.getLineAndCharacterOfPosition(diag.start);
                    return ` (${line + 1}:${character + 1})`;
                  })()
                : '';
            const msg =
              typeof diag.messageText === 'string'
                ? diag.messageText
                : diag.messageText.messageText;
            this.pushLine('error', [`TS${diag.code}: ${msg}${pos}`]);
          }
          this.running.set(false);
          return;
        }

        this.executeInSandbox(result.outputText);
      })
      .catch(() => {
        this.pushLine('error', ['Failed to load TypeScript compiler']);
        this.running.set(false);
      });
  }

  onCodeInput(event: Event) {
    this.code.set((event.target as HTMLTextAreaElement).value);
  }

  syncScroll(event: Event) {
    const scrollTop = (event.target as HTMLTextAreaElement).scrollTop;
    this.lineNumbersEl.nativeElement.scrollTop = scrollTop;
  }

  compareFiles = (a: PlaygroundFile, b: PlaygroundFile) => a?.path === b?.path;

  prefixFor(type: OutputLine['type']): string {
    return { log: '>', warn: '⚠', error: '✕', info: 'i' }[type];
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Tab') return;
    event.preventDefault();

    const el = event.target as HTMLTextAreaElement;
    const { selectionStart, selectionEnd } = el;
    const value = el.value;

    // Insert two spaces (or '\t' if you prefer a hard tab)
    el.value = value.slice(0, selectionStart) + '  ' + value.slice(selectionEnd);
    el.selectionStart = el.selectionEnd = selectionStart + 2;

    this.code.set(el.value);
  }

  private loadFile(file: PlaygroundFile) {
    this._http.get(file.path, { responseType: 'text' }).subscribe({
      next: (src) => this.code.set(src),
      error: () => this.code.set(`// Could not load ${file.path}`),
    });
  }

  private ensureTypeScriptLoaded(): Promise<void> {
    if ((window as any)['ts']) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src =
        'https://cdn.jsdelivr.net/npm/typescript@5.4.5/lib/typescript.js';
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }

  private executeInSandbox(js: string) {
    this._iframe?.remove();

    const iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-scripts');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    this._iframe = iframe;

    const origin = window.location.origin;

    const html = `<!DOCTYPE html><html><body><script>
      const _post = (type, args) =>
        window.parent.postMessage({ __playground: true, type, args }, '${origin}');

      ['log','warn','error','info'].forEach(m => {
        const orig = console[m].bind(console);
        console[m] = (...a) => { _post(m, a.map(x => {
          try { return typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x); }
          catch(e) { return String(x); }
        })); orig(...a); };
      });

      window.onerror = (msg, _src, line, col) => {
        _post('error', [msg + ' (line ' + line + ':' + col + ')']);
        return true;
      };

      try {
        ${js}
      } catch(e) {
        _post('error', [e?.message ?? String(e)]);
      }

      _post('__done', []);
    <\/script></body></html>`;

    iframe.srcdoc = html;
  }

  private onMessage(event: MessageEvent) {
    if (!event.data?.__playground) return;
    if (event.data.type === '__done') {
      this.running.set(false);
      return;
    }
    this.pushLine(event.data.type, event.data.args);
  }

  private pushLine(type: OutputLine['type'], args: string[]) {
    this.outputLines.update((lines) => [...lines, { type, args }]);

    setTimeout(() => {
      if (this.outputEl) {
        this.outputEl.nativeElement.scrollTop =
          this.outputEl.nativeElement.scrollHeight;
      }
    });
  }
}
