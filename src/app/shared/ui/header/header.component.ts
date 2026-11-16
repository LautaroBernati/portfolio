import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, DOCUMENT, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { LanguageService, StorageService, ThemesService } from '../../services';
import { AppTheme, LanguageValue, Option } from '../../types';
import { optionMapper } from '../../utils';

type ThemeValue = AppTheme;

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class HeaderComponent implements AfterViewInit {
  private readonly _activeSection = signal<string>('home');
  private readonly _breakpointObserver = inject(BreakpointObserver);
  private readonly _languageService = inject(LanguageService);
  private readonly _themesService = inject(ThemesService);
  private readonly _storageService = inject(StorageService);
  private readonly _viewPortScroller = inject(ViewportScroller);

  public readonly activeSection = this._activeSection.asReadonly();
  public readonly isMobile$ = this._breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    distinctUntilChanged(),
  );
  public readonly themeControl = new FormControl<ThemeValue>(this._themesService.theme(), { nonNullable: true });
  public readonly themeOptions$: Observable<Option<ThemeValue>[]>;
  public isSettingsPanelOpened = false;
  public readonly moonIcon = faMoon;
  public readonly sunIcon = faSun;
  public readonly languageControl = new FormControl<LanguageValue>(this._languageService.appLanguage(), { nonNullable: true });
  public readonly langOptions$: Observable<Option<LanguageValue>[]>;

  constructor() {
    const document = inject(DOCUMENT);
    document.body.classList.add('mat-app-background');

    this.themeControl.valueChanges.subscribe((value) => {
      this._themesService.setTheme(value);
      this._storageService.set('lb_portfolio.theme', value);
    });

    this.langOptions$ = this._languageService.langOptions$.pipe(
      map(optionMapper<LanguageValue>)
    );

    this.themeOptions$ = this._languageService.themeOptions$.pipe(
      map(optionMapper<ThemeValue>),
    );

    this.languageControl.valueChanges.subscribe((value) => {
      this._languageService.setAppLanguage(value);
      this._storageService.set('lb_portfolio.language', value);
    });

    this._viewPortScroller.setOffset([0, 64]);
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
