import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ContactMePage {
  public readonly mailIcon = faEnvelope;

  constructor() { }
}