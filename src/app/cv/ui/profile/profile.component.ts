import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { DatePipe, NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { Tool } from 'src/app/shared/services/tools.service';
import { SkeletonLoaderComponent } from 'src/app/shared/skeleton-loader/skeleton-loader.component';
import { fadeIn } from 'src/app/shared/utils/fade-in.animation';
import { Language } from '../../data-access/languages.service';
import { LanguageItemComponent } from '../lang-item-ui/lang.component';

@Component({
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(150 + 'ms ease-in')),
      transition('true => false', animate(150 + 'ms ease-out')),
    ]),
    fadeIn(),
  ],
  standalone: true,
  selector: 'cv-profile-ui',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    DatePipe,
    FontAwesomeModule,
    LanguageItemComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SkeletonLoaderComponent,
    TranslateModule,
    NgOptimizedImage,
],
  host: {
    '[style.width]': 'width()',
  },
})

export class ProfileComponent {
  public readonly country = input<string | null>(null);
  public readonly header = input<string | null>(null);
  public readonly subHeader = input<string | null>(null);
  public readonly languages = input<Language[] | null>();
  public readonly phoneNumber = input<string | null>(null);
  public readonly tools = input<Tool[] | null>(null);
  public readonly width = input('100%');

  public readonly birthday = new Date(1997, 8, 20);
  public readonly faBirthdayCake = faBirthdayCake;
  public readonly faEnvelope = faEnvelope;
  public readonly faGithub = faGithub;
  public readonly faLinkedinIn = faLinkedinIn;
  public readonly faMapMarker = faMapMarker;
  public readonly faPhone = faPhone;
  public showDetails = true;

  constructor() { }

  public calculateAge(birthDate: Date): number {
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const hasBirthdayOccurred = currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

    if (!hasBirthdayOccurred) {
      return age - 1;
    } else {
      return age;
    }
  }
}
