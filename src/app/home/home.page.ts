import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { startWith } from 'rxjs';
import Typed, { TypedOptions } from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit, OnDestroy {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _translateService = inject(TranslateService);
  private typedInstance?: Typed;

  constructor() { }

  ngOnDestroy(): void {
    this.typedInstance?.destroy();
  }

  ngOnInit(): void {
    this._translateService.onLangChange.pipe(
      startWith({ lang: this._translateService.currentLang }),
      takeUntilDestroyed(this._destroyRef),
    ).subscribe(value => {
      switch (value.lang) {
        case 'en':
          this.createTyped(['', 'I am Full-Stack.', 'I build Web apps.', 'I build Mobile apps.']);
          break;
        case 'es':
          this.createTyped(['', 'Soy Full-Stack.', 'Desarrollo Web apps.', 'Desarrollo Mobile apps.']);
          break;
      }
    });
  }

  private createTyped(strings: string[]) {
    this.typedInstance?.destroy();
    const options: TypedOptions = {
      strings,
      typeSpeed: 150,
      backSpeed: 100,
      loop: true
    };
    this.typedInstance = new Typed('.typed', options);
    this.typedInstance.reset(true);
  }
}
