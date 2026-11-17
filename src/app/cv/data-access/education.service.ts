import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable, combineLatest, map, shareReplay } from 'rxjs';
import { LanguageService } from '../../shared/services';
import { TranslatedDocument } from '../../shared/types';

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
  Tech?: string;
};

export type Education = Omit<RawEducation, 'Description' | 'type'> & { Description: string; type: string; };

@Injectable()
export class EducationService {
  private readonly _fs = inject(Firestore);
  private readonly _expColl = collection(this._fs, 'education');
  private readonly _query = query(this._expColl, orderBy('Order', 'asc'));
  private readonly _langservice = inject(LanguageService);

  public readonly educationItems$ = (
    combineLatest({
      coll: collectionData(this._query, { idField: 'UID' }) as Observable<RawEducation[]>,
      currLang: toObservable(this._langservice.appLanguage),
    })
  ).pipe(
    shareReplay({ bufferSize: 1, refCount: false }),
    map(({ coll, currLang }): Education[] => coll.map((t) => ({
      ...t,
      Description: <string>t.Description[(currLang as keyof TranslatedDocument<string>)].replace(/\\n/g, '\n'),
      type: <string>t.type[(currLang as keyof TranslatedDocument<string>)],
    })))
  );
}
