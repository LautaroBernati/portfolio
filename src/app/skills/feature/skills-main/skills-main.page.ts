import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { faAngular, faMicrosoft, faNode, faNodeJs, faReact, faVuejs, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { combineLatest, map } from 'rxjs';
import { MethodologiesService } from '../../data-access/methodologies.service';
import { Skill, SkillsService, StrippedSkill } from '../../data-access/skills.service';
import { ToolsService } from '../../data-access/tools.service';


@Component({
  selector: 'app-skills',
  templateUrl: 'skills-main.page.html',
  styleUrls: ['skills-main.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsPage implements OnInit {
  private readonly _skillsService = inject(SkillsService);
  private readonly _toolsService = inject(ToolsService);
  private readonly _methodologiesService = inject(MethodologiesService);

  public readonly dependencies$;

  constructor() {
    const angSkills$ = this._skillsService.strippedSkills$.pipe(
      map(strippedSkills => {
        return strippedSkills.find(ss => ss.UID === 'ANG')!;
      }),
      map((angSkill) => {
        return this.mapearImagenes(angSkill, faAngular);
      }),
    );

    const reactSkills$ = this._skillsService.strippedSkills$.pipe(
      map(strippedSkills => {
        return strippedSkills.find(ss => ss.UID === 'REA')!;
      }),
      map((skill) => {
        return this.mapearImagenes(skill, faReact);
      }),
    );

    const vueSkills$ = this._skillsService.strippedSkills$.pipe(
      map(strippedSkills => {
        return strippedSkills.find(ss => ss.UID === 'VUE')!;
      }),
      map((skill) => {
        return this.mapearImagenes(skill, faVuejs);
      }),
    );

    const frontEndSkills$ = combineLatest([
      angSkills$,
      reactSkills$,
      vueSkills$,
    ]);

    const nodeSkills$ = this._skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NOD')!),
      map(skill => this.mapearImagenes(skill, faNode)),
    );
    const nestSkills$ = this._skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NES')!),
      map(skill => this.mapearImagenes(skill, faNodeJs)),
    );
    const netSkills$ = this._skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NET')!),
      map(skill => this.mapearImagenes(skill, faMicrosoft)),
    );

    const backEndSkills$ = combineLatest([
      nodeSkills$,
      nestSkills$,
      netSkills$,
    ]);

    this.dependencies$ = combineLatest([
      frontEndSkills$,
      backEndSkills$,
      this._toolsService.tools$,
      this._methodologiesService.methodologies$,
    ]);
  }

  private mapearImagenes(array: StrippedSkill, iconDef: IconDefinition) {
    return <Skill>{ ...array, Icon: iconDef };
  }

  ngOnInit() { }
}
