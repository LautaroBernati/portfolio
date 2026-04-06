import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { ToolsService } from 'src/app/shared/services/tools.service';
import { fadeIn } from 'src/app/shared/utils/fade-in.animation';
import { numberToRgb } from 'src/app/shared/utils/number-to-rgb.function';
import { CVService } from '../../data-access/cv.service';
import { EducationService } from '../../data-access/education.service';
import { ExperiencesService } from '../../data-access/experiences.service';
import { LaguangesService } from '../../data-access/languages.service';
import { CVItemsModule } from '../../ui/cv-items/cv-items.module';
import { ProfileComponent } from '../../ui/profile/profile.component';

@Component({
  selector: 'app-cv',
  templateUrl: 'cv-main.page.html',
  styleUrls: ['cv-main-rename.page.scss'],
  animations: fadeIn(),
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    CVItemsModule,
    MatProgressSpinnerModule,
    ProfileComponent,
    TranslateModule,
    MatButton,
    MatIcon,
    OverlayModule,
],
  providers: [ExperiencesService, EducationService, LaguangesService],
})
export class CVMainPage {
  private readonly _cvService = inject(CVService);
  private readonly _educationService = inject(EducationService);
  private readonly _experiencesService = inject(ExperiencesService);
  private readonly _langService = inject(LaguangesService);
  private readonly _toolsServie = inject(ToolsService);

  public downloadPanelOpened = false;
  public readonly experiences$;
  public readonly education$;
  public readonly header$: Observable<string>;
  public readonly subHeader$: Observable<string>;
  public readonly languages$;
  public readonly tools$;

  public readonly country$: Observable<string> = this._cvService.cvItems$.pipe(
    map((coll): string => coll.find(t => t.id === 'country')!.desc)
  );
  public readonly phoneNumber$ = this._cvService.cvItems$.pipe(
    map((coll): string => coll.find(t => t.id === 'phoneNumber')!.desc)
  );

  constructor() {
    this.experiences$ = this._experiencesService.experiences$;
    this.education$ = this._educationService.experiences$;
    this.languages$ = this._langService.langs$;
    this.tools$ = this._toolsServie.tools$;
    this.header$ = this._cvService.cvItems$.pipe(
      map((coll): string => coll.find(t => t.id === 'title')!.desc)
    );
    this.subHeader$ = this._cvService.cvItems$.pipe(
      map((coll): string => coll.find(t => t.id === 'subTitle')!.desc)
    );
  }

  public onDownloadPdf(version: 'en' | 'es'): void {
    const link = document.createElement('a');
    link.href = 'assets/docs/cv_bernati_' + version + '.pdf';
    link.download = 'CV Bernati Lautaro ' + version.toUpperCase() + '.pdf';
    link.click();
  }

  public numberToRgb = numberToRgb;
}