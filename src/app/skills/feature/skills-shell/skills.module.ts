import { NgModule } from '@angular/core';
import { MethodologiesService } from '../../data-access/methodologies.service';
import { SkillsService } from '../../data-access/skills.service';
import { ToolsService } from '../../data-access/tools.service';
import { SkillsMainModule } from '../skills-main/skills-main.module';
import { SkillsRoutingModule } from './skills-routing.module';


@NgModule({
  imports: [
    SkillsRoutingModule,
    SkillsMainModule,
  ],
  providers: [SkillsService, ToolsService, MethodologiesService]
})
export class SkillsModule { }
