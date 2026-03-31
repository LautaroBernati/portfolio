import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { combineLatest, map, Observable, shareReplay, startWith } from 'rxjs';
import { TranslatedDocument } from 'src/app/shared/types/translated-coll.type';

type RawEducation = {
  Title: string;
  Subtitle: string;
  Description: TranslatedDocument<string>;
  From: number;
  To: number;
  LogoUrl?: string;
  hours?: number;
  stack?: string;
  type: TranslatedDocument<string>;
};

export type Education = Omit<RawEducation, 'Description' | 'type'> & { Description: string; type: string; };

@Injectable()
export class EducationService {
  private readonly _fs = inject(Firestore);
  private readonly _expColl = collection(this._fs, 'education');
  private readonly _query = query(this._expColl, orderBy('Order', 'asc'));
  private readonly _translateService = inject(TranslateService);

  public readonly experiences$ = (
    combineLatest({
      coll: collectionData(this._query, { idField: 'UID' }) as Observable<RawEducation[]>,
      currLang: this._translateService.store.onLangChange.pipe(
        startWith(<LangChangeEvent>{
          lang: this._translateService.currentLang,
          translations: this._translateService.translations
        }),
      )
    })
  ).pipe(
    shareReplay({ bufferSize: 1, refCount: false }),
    map(({ coll, currLang }): Education[] => coll.map((t) => ({
      ...t,
      Description: <string>t.Description[(currLang.lang as keyof TranslatedDocument<string>)],
      type: <string>t.type[(currLang.lang as keyof TranslatedDocument<string>)],
    })))
  );
}
