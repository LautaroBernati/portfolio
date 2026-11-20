import { provideHttpClient, withXhr } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const portfolioProviders: (Provider | EnvironmentProviders)[] = [
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth()),
  provideHttpClient(withXhr()),
];
