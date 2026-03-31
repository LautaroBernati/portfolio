import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonLoaderComponent } from '../shared/skeleton-loader/skeleton-loader.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';


@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FontAwesomeModule,
    TranslateModule.forChild(),
    SkeletonLoaderComponent,
    NgOptimizedImage
],
  exports: [AboutPage],
})
export class AboutModule { }
