import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonLoaderComponent } from 'src/app/shared/skeleton-loader/skeleton-loader.component';
import { CVItemComponent } from './cv-items.component';


@NgModule({
  declarations: [CVItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule.forChild(),
    SkeletonLoaderComponent,
  ],
  exports: [CVItemComponent],
})
export class CVItemsModule { }
