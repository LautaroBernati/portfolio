import { provideHttpClient, withXhr } from '@angular/common/http';
import { EnvironmentProviders, inject, provideAppInitializer, Provider } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { appStartup } from './app-startup';
import { appRoutes } from './app.routes';
import { LanguageService, StorageService, ThemesService } from './shared/services';

export const portfolioProviders: (Provider | EnvironmentProviders)[] = [
  provideTranslateService({
    fallbackLang: 'en'
  }),
  provideRouter(
    appRoutes,
    withInMemoryScrolling({
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ),
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth()),
  provideHttpClient(withXhr()),
  LanguageService,
  provideAppInitializer((): void => {
    appStartup(inject(LanguageService), inject(StorageService), inject(ThemesService));
  }),
];
