import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { provideChildTranslateService, TranslatePipe } from '@ngx-translate/core';
import { SkeletonLoaderComponent } from '../../../shared/ui/skeleton-loader/skeleton-loader.component';
import { TabDetailModule } from '../tab-detail/tab-detail.module';
import { ToolMetDetailComponent } from '../tool-met-detail/tool-met-detail.component';
import { PlaygroundComponent } from '../ts-playground/playground.component';
import { SkillsTabsComponent } from './skills-tabs.component';

@NgModule({
  declarations: [SkillsTabsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    PlaygroundComponent,
    SkeletonLoaderComponent,
    TabDetailModule,
    ToolMetDetailComponent,
    TranslatePipe
  ],
  exports: [SkillsTabsComponent],
  providers: [provideChildTranslateService()]
})
export class SkillsTabModule { }
