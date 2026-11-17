import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { provideChildTranslateService, TranslatePipe } from '@ngx-translate/core';
import { SkeletonLoaderComponent } from '../../../shared/ui/skeleton-loader/skeleton-loader.component';
import { CVItemComponent } from './cv-items.component';


@NgModule({
  declarations: [CVItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage,
    SkeletonLoaderComponent,
    TranslatePipe,
  ],
  exports: [CVItemComponent],
  providers: [provideChildTranslateService()]
})
export class CVItemsModule { }
