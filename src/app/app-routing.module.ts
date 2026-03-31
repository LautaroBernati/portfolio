import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home', component: HomePage, title: 'Home'
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'skills', 
    loadChildren: () => import('./skills/feature/skills-shell/skills.module').then(m => m.SkillsModule),
  },
  {
    path: 'cv', 
    loadChildren: () => import('./cv/feature/cv-shell/cv.module').then(m => m.CVModule),
  },
  {
    path: '**', redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { useHash: true },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
