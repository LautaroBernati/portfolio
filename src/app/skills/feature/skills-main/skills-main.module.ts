import { NgModule } from '@angular/core';
import { SkillsPage } from './skills-main.page';
import { SkillsTabModule } from '../../ui/skills-tabs/skills-tabs.module';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SkeletonLoaderComponent } from 'src/app/shared/skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [SkillsPage],
  imports: [
    CommonModule,
    SkeletonLoaderComponent,
    SkillsTabModule,
    MatProgressSpinnerModule,
  ],
  exports: [SkillsPage],
  providers: [],
})
export class SkillsMainModule { }
