import { Routes } from '@angular/router';
import { portfolioProviders } from './app.providers';
import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';
import { inject, provideEnvironmentInitializer } from '@angular/core';
import { LanguageService } from './shared/services';

export const appRoutes: Routes = [
  {
    path: '',
    providers: portfolioProviders,
    children: [
      { path: '', component: AppComponent }
    ],
  },
  {
    path: 'cv',
    providers: [
      portfolioProviders,
      provideEnvironmentInitializer(() => inject(LanguageService))
    ],
    loadComponent: () => import('./cv/feature/cv-main/cv-main.page').then(m => m.CVMainPage),
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/feature/skills-main/skills-main.page').then(m => m.SkillsPage),
    providers: [
      portfolioProviders,
      provideEnvironmentInitializer(() => inject(LanguageService))
    ],
  },
];
