import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { Tool } from '../../../shared/services/tools.service';
import { SkeletonLoaderComponent } from '../../../shared/ui/skeleton-loader/skeleton-loader.component';
import { Language, SkillCvContainer } from '../../data-access';
import { LanguageItemComponent } from '../lang-item-ui/lang.component';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'cv-profile-ui',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgClass,
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
    }
})

export class ProfileComponent {
  public readonly country = input<string | null>(null);
  public readonly header = input<string | null>(null);
  public readonly languages = input<Language[] | null>();
  public readonly phoneNumber = input<string | null>(null);
  public readonly skills = input<SkillCvContainer[] | null>(null);
  public readonly subHeader = input<string | null>(null);
  public readonly tools = input<Tool[] | null>(null);
  public readonly width = input('100%');

  public readonly birthday = new Date(1997, 8, 20);
  public readonly faBirthdayCake = faBirthdayCake;
  public readonly faEnvelope = faEnvelope;
  public readonly faGithub = faGithub;
  public readonly faLinkedinIn = faLinkedinIn;
  public readonly faMapMarker = faMapMarker;
  public readonly faPhone = faPhone;
  public readonly imgSrc = environment.origin + 'assets/images/avatar-pic.jpeg';
  public showDetails = true;

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
