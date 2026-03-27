import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input } from '@angular/core';
import { Methodology } from '../../data-access/methodologies.service';
import { Skill } from '../../data-access/skills.service';
import { Tool } from '../../data-access/tools.service';


@Component({
  selector: 'sk-tabs-ui',
  templateUrl: 'skills-tabs.component.html',
  styleUrls: ['skills-tabs.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('200ms',
          style({ opacity: 1 })
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })
        )
      ])
    ])
  ],
})
export class SkillsTabsComponent {
  public readonly backEndSkills = input<Skill[]>();
  public readonly frontEndSkills = input<Skill[]>();
  public readonly loading = input.required<boolean>();
  public readonly methodologies = input<Methodology[]>();
  public readonly tools = input<Tool[]>();
}
