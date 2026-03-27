import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Methodology } from '../../data-access/methodologies.service';
import { Tool } from '../../data-access/tools.service';


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

  getColor(progress: number) {
    const red = Math.min(255, Math.round((100 - progress) * 255 / 50)); // Red component
    const green = Math.min(200, Math.round((progress) * 200 / 50)); // Green component

    // Return the color as an RGB string
    return `rgb(${red}, ${green}, 0)`;
  }
}
