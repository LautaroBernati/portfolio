import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Methodology } from '../../data-access/methodologies.service';
import { Tool } from '../../../shared/services/tools.service';
import { numberToRgb } from 'src/app/shared/utils/number-to-rgb.function';


@Component({
  selector: 'sk-tool-met-detail-ui',
  templateUrl: 'tool-met-detail.component.html',
  styleUrls: ['tool-met-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolMetDetailComponent {
  @Input('item') item: Tool | Methodology | null = null;

  public getColor(progress: number): string {
    return numberToRgb(progress);
  }
}
