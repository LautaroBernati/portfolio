import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable, combineLatest, map, shareReplay, startWith } from 'rxjs';
import { RawTranslatedDoc } from 'src/app/shared/types/translated-coll.type';

@Injectable({
  providedIn: 'root'
})
export class CVService {
  private readonly _fs = inject(Firestore);
  private readonly _cvColl = collection(this._fs, 'cv');
  private readonly _translateService = inject(TranslateService);

  public readonly cvItems$: Observable<{ id: string; desc: string }[]> = combineLatest({
    coll: (collectionData(this._cvColl, { idField: 'UID' }) as Observable<RawTranslatedDoc<string>[]>),
    currLang: this._translateService.store.onLangChange.pipe(
      startWith(<LangChangeEvent>{
        lang: this._translateService.currentLang,
        translations: this._translateService.translations
      }),
    ),
  }).pipe(
    shareReplay({ refCount: true, bufferSize: 1 }),
    map(({ currLang, coll }) => {
      const lang = currLang.lang as 'en' | 'es';
      return coll.map((t): { id: string; desc: string } => ({
        id: t.UID,
        desc: t[lang]
      }));
    })
  );
}
