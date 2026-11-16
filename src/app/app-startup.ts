import { LanguageService, StorageService, ThemesService } from './shared/services';
import { AppTheme, LanguageValue } from './shared/types';

export function appStartup(
  langService: LanguageService,
  storageService: StorageService,
  themeService: ThemesService,
): void {
  const savedLang = storageService.get<LanguageValue | null>('lb_portfolio.language');
  const savedTheme = storageService.get<AppTheme | null>('lb_portfolio.theme');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkSystem = media.matches;

  if (savedLang) {
    langService.setAppLanguage(savedLang);
  } else {
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs: LanguageValue[] = ['en', 'es'];
    const lang = (supportedLangs.includes(browserLang as LanguageValue) ? browserLang : 'en') as LanguageValue;
    langService.setAppLanguage(lang);
  }

  if (savedTheme) {
    themeService.setTheme(savedTheme);
  } else {
    themeService.setTheme(isDarkSystem ? 'dark' : 'light');
  }

  media.addEventListener('change', event => {
    themeService.setTheme(event.matches ? 'dark' : 'light');
  });
}
