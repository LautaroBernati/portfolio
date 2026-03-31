import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { AboutRoutingModule } from "src/app/about/about-routing.module";
import { SkeletonLoaderComponent } from 'src/app/shared/skeleton-loader/skeleton-loader.component';
import { EducationService } from '../../data-access/education.service';
import { ExperiencesService } from '../../data-access/experiences.service';
import { LaguangesService } from '../../data-access/languages.service';
import { CVItemsModule } from '../../ui/cv-items/cv-items.module';
import { ExtraCardComponent } from '../../ui/extra/extra.component';
import { LanguageItemComponent } from '../../ui/lang-item-ui/lang.component';
import { ProfileComponent } from '../../ui/profile/profile.component';
import { CVMainPage } from './cv-main.page';


@NgModule({
  declarations: [
    CVMainPage
  ],
  imports: [
    AboutRoutingModule,
    CommonModule,
    CVItemsModule,
    ExtraCardComponent,
    LanguageItemComponent,
    MatProgressSpinnerModule,
    ProfileComponent,
    TranslateModule,
    SkeletonLoaderComponent,
],
  exports: [CVMainPage],
  providers: [ExperiencesService, EducationService, LaguangesService],
})
export class CVMainModule { }
