import { inject, Signal } from '@angular/core';
import { Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { portfolioProviders } from './app.providers';
import { LanguageService } from './shared/services';

export const routes: Routes = [
  {
    path: '',
    providers: [
      portfolioProviders,
      {
        provide: LanguageService, // replace so the remote version relies only on the library's references.
        useFactory: (): LanguageService => {
          const service = inject(TranslateService);

          return {
            appLanguage: service.currentLang as Signal<'en' | 'es'>,
          } as unknown as LanguageService;
        }
      },
    ],
    children: [
      {
        path: 'cv',
        title: () => {
          const translate = inject(TranslateService);
          return translate.currentLang() === 'en' ? 'Resume | LB' : 'CV | LB';
        },
        loadComponent: () => import('./cv/feature/cv-main/cv-main.page').then(m => m.CVMainPage),
      },
      {
        path: 'skills',
        title: () => {
          const translate = inject(TranslateService);
          return translate.currentLang() === 'en' ? 'Portfolio | LB' : 'Portafolio | LB';
        },
        loadComponent: () => import('./skills/feature/skills-main/skills-main.page').then(m => m.SkillsPage),
      }
    ]
  },
];
