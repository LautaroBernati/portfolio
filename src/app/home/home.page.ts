import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, combineLatest, map, Observable, startWith, take } from 'rxjs';
import Typed, { TypedOptions } from 'typed.js';
import { RawTranslatedDoc, TranslatedDocument } from '../shared/types/translated-coll.type';
import { fadeIn } from '../shared/utils/fade-in.animation';

function findInColl<T>(rawColl: RawTranslatedDoc<T>[], uid: string): TranslatedDocument<T> {
  return rawColl.find(t => t.UID === uid)!;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    TranslateModule,
  ],
  animations: [fadeIn()]
})
export class HomePage implements OnInit, OnDestroy {
  private readonly _showFullContent$ = new BehaviorSubject<boolean>(false);
  private readonly _fs = inject(Firestore);
  private readonly _aboutColl = collection(this._fs, 'about');
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _translateService = inject(TranslateService);
  private _fixedTypedInstahce?: Typed;
  private _typedInstance?: Typed;

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
      currLang: this._translateService.onLangChange.pipe(
        startWith(<LangChangeEvent>{
          lang: this._translateService.getCurrentLang()
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
  public readonly faGithub = faGithub;
  public readonly faLinkedinIn = faLinkedinIn;
  public readonly showFullContent$ = this._showFullContent$.asObservable();

  constructor() { }

  ngOnDestroy(): void {
    this._typedInstance?.destroy();
    this._fixedTypedInstahce?.destroy();
    this._showFullContent$.complete();
  }

  ngOnInit(): void {
    this._fixedTypedInstahce = this.createTyped(
      '.fixed-typed',
      ['', 'Component → Action → Reducer → Store → Selector', 'Action → Reducer → Effect → Action', 'Observable → Pipe → Operator → Subscriber'],
      3500
    );
  }

  public curateText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  public onToggleReadBtn(): void {
    this._showFullContent$.pipe(take(1)).subscribe(state => this._showFullContent$.next(!state));
  }

  private createTyped(cssName: string, strings: string[], backDelay = 2000) {
    this._typedInstance?.destroy();
    const options: TypedOptions = {
      strings,
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      backDelay,
    };
    return new Typed(cssName, options);
  }
}
