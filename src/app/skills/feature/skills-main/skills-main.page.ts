import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { faAngular, faMicrosoft, faNode, faNodeJs, faReact, faVuejs, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { combineLatest, map } from 'rxjs';
import { ToolsService } from '../../../shared/services/tools.service';
import { MethodologiesService } from '../../data-access/methodologies.service';
import { Skill, SkillsService, StrippedSkill } from '../../data-access/skills.service';
import { SkillsTabModule } from '../../ui/skills-tabs/skills-tabs.module';
import { PlaygroundFile } from '../../ui/ts-playground/playground.component';


@Component({
  selector: 'app-skills',
  templateUrl: 'skills-main.page.html',
  styleUrls: ['skills-main.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SkillsTabModule,
    TranslateModule,
  ],
  providers: [
    SkillsService,
    MethodologiesService,
  ]
})
export class SkillsPage implements OnInit {
  private readonly _skillsService = inject(SkillsService);
  private readonly _toolsService = inject(ToolsService);
  private readonly _methodologiesService = inject(MethodologiesService);

  public readonly dependencies$;
  public readonly PLAYGROUND_FILES: PlaygroundFile[] = [
    { label: 'fibonacci.ts', path: 'assets/playground/fibonacci.ts' },
    { label: 'subscriber-pattern.ts', path: 'assets/playground/subscriber-pattern.ts' },
    { label: 'rate-limiter.ts', path: 'assets/playground/rate-limiter.ts' },
    { label: 'form-validator.ts', path: 'assets/playground/form-validator.ts' },
    { label: 'filter-builder.ts', path: 'assets/playground/filter-builder.ts' },
  ];

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
