import { NgModule } from '@angular/core';
import { CVMainModule } from '../cv-main/cv-main.module';
import { CVRoutingModule } from './cv-routing.module';


@NgModule({
  imports: [
    CVRoutingModule,
    CVMainModule,
  ],
})
export class CVModule { }
