import { effect, inject, Service, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import en from '../../../assets/i18n/en.json';
import es from '../../../assets/i18n/es.json';
import { LanguageValue } from '../types';

@Service({ autoProvided: false })
export class LanguageService {
  private readonly _appLanguage = signal<LanguageValue>('en');
  private readonly _translateService = inject(TranslateService);

  public readonly appLanguage = this._appLanguage.asReadonly();
  public readonly langOptions$: Observable<Record<string, string>> = this._translateService.stream('navbar.settings.langSelect.values');
  public readonly themeOptions$: Observable<Record<string, string>> = this._translateService.stream('navbar.settings.themeSelect.values');

  constructor() {
    this._translateService.setTranslation('en', en);
    this._translateService.setTranslation('es', es);
    this.setAppLanguage('en');

    effect(() => {
      this._translateService.use(this._appLanguage());
    });
  }

  public setAppLanguage(value: LanguageValue): void {
    this._appLanguage.set(value);
  }
}
