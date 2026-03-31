import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToolsService } from 'src/app/shared/services/tools.service';
import { fadeIn } from 'src/app/shared/utils/fade-in.animation';
import { numberToRgb } from 'src/app/shared/utils/number-to-rgb.function';
import { EducationService } from '../../data-access/education.service';
import { ExperiencesService } from '../../data-access/experiences.service';
import { LaguangesService, Language } from '../../data-access/languages.service';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
import { CVService } from '../../data-access/cv.service';
import { RawTranslatedDoc, TranslatedDocument } from 'src/app/shared/types/translated-coll.type';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

function findInColl<T>(rawColl: RawTranslatedDoc<T>[], uid: string): TranslatedDocument<T> {
  return rawColl.find(t => t.UID === uid)!;
}

@Component({
  selector: 'cv-main',
  templateUrl: 'cv-main.page.html',
  styleUrls: ['cv-main-rename.page.scss'],
  animations: fadeIn(),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CVMainPage {
  private readonly _cvService = inject(CVService);
  private readonly _educationService = inject(EducationService);
  private readonly _experiencesService = inject(ExperiencesService);
  private readonly _langService = inject(LaguangesService);
  private readonly _toolsServie = inject(ToolsService);
  private readonly _translateService = inject(TranslateService);

  private readonly _currLang$ = this._translateService.store.onLangChange.pipe(
    startWith(<LangChangeEvent>{
      lang: this._translateService.currentLang,
      translations: this._translateService.translations
    }),
  );

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

  public numberToRgb = numberToRgb;
}