import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { appStartup } from './app-startup';
import { portfolioProviders } from './app.providers';
import { routes } from './app.routes';
import { LanguageService, StorageService, ThemesService } from './shared/services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideTranslateService({
      fallbackLang: 'en'
    }),
    LanguageService,
    portfolioProviders,
    provideAppInitializer((): void => {
      appStartup(inject(LanguageService), inject(StorageService), inject(ThemesService));
    }),
  ],
};
