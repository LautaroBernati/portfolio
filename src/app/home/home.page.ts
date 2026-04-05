import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';
import { startWith } from 'rxjs';
import Typed, { TypedOptions } from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class HomePage implements OnInit, OnDestroy {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _translateService = inject(TranslateService);
  private _fixedTypedInstahce?: Typed;
  private _typedInstance?: Typed;

  constructor() { }

  ngOnDestroy(): void {
    this._typedInstance?.destroy();
    this._fixedTypedInstahce?.destroy();
  }

  ngOnInit(): void {
    this._fixedTypedInstahce = this.createTyped(
      '.fixed-typed',
      ['', 'Component → Action → Reducer → Store → Selector → Component.', 'Action → Reducer → Effect → Action'],
      3500
    );

    this._translateService.onLangChange.pipe(
      startWith({ lang: this._translateService.currentLang }),
      takeUntilDestroyed(this._destroyRef),
    ).subscribe(value => {
      switch (value.lang) {
        case 'en':
          this._typedInstance = this.createTyped(
            '.typed',
            ['', 'Scalable, high-performance web apps.', 'Front-End expertise.', 'Reactive architecture.', 'Mobile-first approach.']
          );
          break;
        case 'es':
          this._typedInstance = this.createTyped(
            '.typed',
            ['', 'Web apps performantes y escalables.', 'Especialización en Front-End.', 'Arquitectura reactiva.', 'Enfoque mobile-first']
          );
          break;
      }
      this._typedInstance?.reset(true);
    });
  }

  private createTyped(cssName: string, strings: string[], backDelay = 2000) {
    this._typedInstance?.destroy();
    const options: TypedOptions = {
      strings,
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      backDelay,
    };
    return new Typed(cssName, options);
  }
}
