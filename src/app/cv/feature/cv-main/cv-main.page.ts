import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Tool, ToolsService } from 'src/app/shared/services/tools.service';
import { fadeIn } from 'src/app/shared/utils/fade-in.animation';
import { numberToRgb } from 'src/app/shared/utils/number-to-rgb.function';
import { EducationService } from '../../data-access/education.service';
import { ExperiencesService } from '../../data-access/experiences.service';
import { LaguangesService, Language } from '../../data-access/languages.service';
import { map } from 'rxjs';

@Component({
  selector: 'cv-main',
  templateUrl: 'cv-main.page.html',
  styleUrls: ['cv-main.page.scss'],
  animations: fadeIn(),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CVMainPage {
  private readonly _educationService = inject(EducationService);
  private readonly _experiencesService = inject(ExperiencesService);
  private readonly _langService = inject(LaguangesService);
  private readonly _toolsServie = inject(ToolsService);

  public readonly experiences$;
  public readonly education$;
  public readonly languages$;
  public readonly tools$;

  constructor() {
    this.experiences$ = this._experiencesService.experiences$;
    this.education$ = this._educationService.experiences$;
    this.languages$ = this._langService.langs$;
    this.tools$ = this._toolsServie.tools$.pipe(
      map(extraMapper)
    );
    
  }

  public numberToRgb = numberToRgb;
}

const extraMapper = (item: { Desc: string }[]) => {
  return item.map(t => t.Desc)
};
