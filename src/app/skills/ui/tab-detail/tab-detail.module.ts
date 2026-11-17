import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideChildTranslateService, TranslatePipe } from '@ngx-translate/core';
import { SkeletonLoaderComponent } from '../../../shared/ui/skeleton-loader/skeleton-loader.component';
import { ImageDetailDialog, TabDetailComponent } from './tab-detail.component';


@NgModule({
  declarations: [TabDetailComponent, ImageDetailDialog],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    SkeletonLoaderComponent,
    TranslatePipe
  ],
  exports: [TabDetailComponent],
  providers: [provideChildTranslateService()]
})
export class TabDetailModule { }
