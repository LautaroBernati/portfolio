import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Education, Experience } from '../../data-access';

@Component({
  selector: 'cv-stepper-ui',
  templateUrl: 'cv-items.component.html',
  styleUrls: ['cv-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.max-width]': 'maxWidth() ?? "400px"',
  },
  standalone: false
})
export class CVItemComponent {
  public readonly item = input<Experience | Education>();
  public readonly isEducation = input.required<boolean>();
  public readonly imgSrc = computed((): string => {
    const item = this.item();

    if (this.isEducation()) {
      return (environment.origin + (item as Education)?.LogoUrl);
    } else {
      return ((item as Experience).logo.external ? (item as Experience).logo.url : (environment.origin + (item as Experience).logo.url));
    }
  });
  public readonly maxWidth = input<string>();
  public showDetails = false;

  onExpand() {
    this.showDetails = !this.showDetails;
  }
}
