import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Methodology } from '../../data-access/methodologies.service';
import { Skill } from '../../data-access/skills.service';
import { Tool } from '../../../shared/services/tools.service';
import { PlaygroundFile } from '../ts-playground/playground.component';

@Component({
  selector: 'sk-tabs-ui',
  templateUrl: 'skills-tabs.component.html',
  styleUrls: ['skills-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class SkillsTabsComponent {
  public readonly backEndSkills = input<Skill[]>();
  public readonly frontEndSkills = input<Skill[]>();
  public readonly loading = input.required<boolean>();
  public readonly methodologies = input<Methodology[]>();
  public readonly playgroundFiles = input.required<PlaygroundFile[]>();
  public readonly tools = input<Tool[]>();
}
