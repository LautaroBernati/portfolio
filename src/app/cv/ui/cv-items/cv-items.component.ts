import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { Experience } from '../../data-access/experiences.service';

@Component({
  selector: 'cv-stepper-ui',
  templateUrl: 'cv-items.component.html',
  styleUrls: ['cv-items.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(150 + 'ms ease-in')),
      transition('true => false', animate(150 + 'ms ease-out')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.max-width]': 'maxWidth() ?? "400px"',
  }
})
export class CVItemComponent {
  public readonly experience = input<Experience>();
  public readonly isEducation = input.required<boolean>();
  public readonly maxWidth = input<string>();
  public showDetails = false;

  onExpand() {
    this.showDetails = !this.showDetails;
  }
}
