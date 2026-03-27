import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactMePage } from './contact.page';


@NgModule({
  declarations: [ContactMePage],
  imports: [
    ContactRoutingModule,
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [ContactMePage],
})
export class ContactModule { }
