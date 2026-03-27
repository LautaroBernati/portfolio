import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate' }),
    TranslateModule.forChild(),
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
