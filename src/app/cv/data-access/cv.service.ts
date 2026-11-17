import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, combineLatest, map, shareReplay } from 'rxjs';
import { LanguageService } from '../../shared/services';
import { TranslatedDocWithId } from '../../shared/types/translated-coll.type';

@Injectable()
export class CVService {
  private readonly _fs = inject(Firestore);
  private readonly _cvColl = collection(this._fs, 'cv');
  private readonly _translateService = inject(LanguageService);

  public readonly cvItems$: Observable<{ id: string; desc: string }[]> = combineLatest({
    coll: (collectionData(this._cvColl, { idField: 'UID' }) as Observable<TranslatedDocWithId<string>[]>),
    currLang: toObservable(this._translateService.appLanguage),
  }).pipe(
    shareReplay({ refCount: true, bufferSize: 1 }),
    map(({ currLang, coll }) => {
      return coll.map((t): { id: string; desc: string } => ({
        id: t.UID,
        desc: t[currLang]
      }));
    })
  );
}
