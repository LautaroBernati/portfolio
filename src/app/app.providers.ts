import { provideHttpClient, withXhr } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';

export const portfolioProviders: (Provider | EnvironmentProviders)[] = [
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
  provideTranslateService({
    fallbackLang: 'en'
  }),
];
