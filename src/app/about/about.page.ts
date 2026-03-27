import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faBirthdayCake, faEnvelope, faGraduationCap, faMapMarker, faPlane } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from '../shared/utils/fade-in.animation';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, map, Observable, startWith, take, withLatestFrom } from 'rxjs';
import { RawTranslatedDoc, TranslatedDocument } from '../shared/types/translated-coll.type';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

function findInColl<T>(rawColl: RawTranslatedDoc<T>[], uid: string): TranslatedDocument<T> {
  return rawColl.find(t => t.UID === uid)!;
}

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  animations: fadeIn(),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  private readonly _fs = inject(Firestore);
  private readonly _aboutColl = collection(this._fs, 'about');
  private readonly _translateService = inject(TranslateService);
  private readonly _showFullContent$ = new BehaviorSubject<boolean>(false);

  public readonly about$: Observable<
    { country: string; moreButtonText: string }
  > = combineLatest({
    aboutData: (collectionData(this._aboutColl, { idField: 'UID' }) as Observable<RawTranslatedDoc<never>[]>).pipe(
      map((coll) => {
        return {
          country: findInColl<string>(coll, 'country'),
          moreBtnText: findInColl<{ less: string; more: string }>(coll, 'moreBtnText')
        };
      }),
    ),
    currLang: this._translateService.store.onLangChange.pipe(
      startWith(<LangChangeEvent>{
        lang: this._translateService.currentLang,
        translations: this._translateService.translations
      }),
    ),
    showMore: this._showFullContent$,
  }).pipe(
    map(({ aboutData, currLang, showMore }) => {
      const lang = currLang.lang as 'en' | 'es';
      const moreOrLess = showMore ? 'less' : 'more';

      return {
        country: aboutData['country'][lang],
        moreButtonText: aboutData.moreBtnText[lang][moreOrLess]
      };
    }),
  );
  public readonly faBirthdayCake = faBirthdayCake;
  public readonly faMapMarker = faMapMarker;
  public readonly faEnvelope = faEnvelope;
  public readonly faGithub = faGithub;
  public readonly faLinkedinIn = faLinkedinIn;
  public readonly atomIcon = faAtom;
  public readonly capIcon = faGraduationCap;
  public readonly planeIcon = faPlane;
  public readonly birthday = new Date(1997, 8, 20);
  public readonly showFullContent$ = this._showFullContent$.asObservable();
  public readonly years = new Date(new Date().getFullYear() - this.birthday.getTime());

  public calculateAge(birthDate: Date): number {
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    const hasBirthdayOccurred = currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

    if (!hasBirthdayOccurred) {
      return age - 1;
    }

    return age;
  }

  public onToggleReadBtn(): void {
    this._showFullContent$.pipe(take(1)).subscribe(state => this._showFullContent$.next(!state));
  }

  public curateText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
}
