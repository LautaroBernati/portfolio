import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { StorageService } from '../../services/storage.service';
import { AppTheme, ThemesService } from '../../services/themes.service';
import { fadeIn } from '../../utils/fade-in.animation';

type Option<T> = {
  label: string;
  value: T;
}

type LanguageValue = 'en' | 'es';

type ThemeValue = AppTheme;

@Component({
  animations: [fadeIn()],
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  private readonly _activeSection = signal<string>('home');
  private readonly _breakpointObserver = inject(BreakpointObserver);
  private readonly _themesService = inject(ThemesService);
  private readonly _translateService = inject(TranslateService);
  private readonly _storageService = inject(StorageService);

  public readonly activeSection = this._activeSection.asReadonly();
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
      this._themesService.setTheme(value);
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
    } else {
      const browserLang = navigator.language.split('-')[0];
      const supportedLangs: LanguageValue[] = ['en', 'es'];
      const lang = (supportedLangs.includes(browserLang as LanguageValue) ? browserLang : 'en') as LanguageValue;
      this.languageControl.setValue(lang);
    }

    if (savedTheme) {
      this.themeControl.setValue(savedTheme);
    }
  }

  public ngAfterViewInit(): void {
    const sections = ['home', 'about', 'cv', 'skills'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) this._activeSection.set(visible.target.id);
      },
      {
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
}

function optionMapper<T>(obj: Record<string, string>): Option<T>[] {
  return Object.entries(obj).map((t): Option<T> => {
    return {
      value: <T>t[0],
      label: t[1]
    };
  });
}
