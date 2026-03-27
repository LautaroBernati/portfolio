import { Component, inject } from '@angular/core';
import { fadeIn } from 'src/app/shared/utils/fade-in.animation';
import { EducationService } from '../../data-access/education.service';
import { ExperiencesService } from '../../data-access/experiences.service';
import { LaguangesService } from '../../data-access/languages.service';

@Component({
  selector: 'cv-main',
  templateUrl: 'cv-main.page.html',
  // styleUrls: ['cv-main.page.scss'],
  animations: fadeIn(),
})
export class CVMainPage {
  private readonly _educationService = inject(EducationService);
  private readonly _experiencesService = inject(ExperiencesService);
  private readonly _langService = inject(LaguangesService);

  public readonly experiences$;
  public readonly education$;
  public readonly languages$;

  constructor() {
    this.experiences$ = this._experiencesService.experiences$;
    this.education$ = this._educationService.experiences$;
    this.languages$ = this._langService.langs$;
  }
}
