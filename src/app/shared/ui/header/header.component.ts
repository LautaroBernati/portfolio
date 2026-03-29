import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, map, Observable, tap } from 'rxjs';
import { StorageService } from '../../services/storage.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

type Option<T> = {
  label: string;
  value: T;
}

type LanguageValue = 'en' | 'es';

type ThemeValue = 'light' | 'dark';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly _breakpointObserver = inject(BreakpointObserver);
  private readonly _translateService = inject(TranslateService);
  private readonly _storageService = inject(StorageService);

  public readonly isMobile$ = this._breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    distinctUntilChanged(),
  );
  public readonly themeControl = new FormControl<ThemeValue>('light', { nonNullable: true });
  public readonly themeOptions$: Observable<Option<ThemeValue>[]>;
  public isSettingsPanelOpened = false;
  public readonly moonIcon = faMoon;
  public readonly sunIcon = faSun;
  public readonly languageControl = new FormControl<LanguageValue>('en', { nonNullable: true });
  public readonly langOptions$: Observable<Option<LanguageValue>[]>;

  constructor() {
    const document = inject(DOCUMENT);
    document.body.classList.add('mat-app-background');
    this.themeControl.valueChanges.subscribe((value) => {
      if (value === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      this._storageService.set('lb_portfolio.theme', value);
    });

    this.langOptions$ = this._translateService.stream('navbar.settings.langSelect.values').pipe(
      map(optionMapper<LanguageValue>)
    );

    this.themeOptions$ = this._translateService.stream('navbar.settings.themeSelect.values').pipe(
      map(optionMapper<ThemeValue>)
    );

    this.languageControl.valueChanges.subscribe((value) => {
      this._translateService.use(value);
      this._storageService.set('lb_portfolio.language', value);
    });

    const savedLang = this._storageService.get<LanguageValue>('lb_portfolio.language');
    const savedTheme = this._storageService.get<ThemeValue>('lb_portfolio.theme');

    if (savedLang) {
      this.languageControl.setValue(savedLang);
    }

    if (savedTheme) {
      this.themeControl.setValue(savedTheme);
    }
  }
}

function optionMapper<T>(obj: { es: string; en: string }): Option<T>[] {
  return Object.entries(obj).map((t): Option<T> => {
    return {
      value: <T>t[0],
      label: t[1]
    };
  });
}
