import { Routes } from '@angular/router';
import { portfolioProviders } from './app.providers';
import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: '',
    providers: portfolioProviders,
    children: [
      { path: '', component: AppComponent }
    ],
  },
];