import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable, combineLatest, map } from 'rxjs';
import { TranslatedDocument } from '../types/translated-coll.type';
import { LanguageService } from './language.service';

type RawTool = {
  Desc: string;
  Percent: number;
  level: TranslatedDocument<string>;
};

export type Tool = Omit<RawTool, 'level'> & {
  level: string
}

@Injectable()
export class ToolsService {
  private readonly _fs = inject(Firestore);
  private readonly _toolsColl = collection(this._fs, 'tools');
  private readonly _langService = inject(LanguageService);
  private readonly _query = query(this._toolsColl, orderBy('order', 'asc'));

  public readonly tools$: Observable<Tool[]> = combineLatest({
    currLang: toObservable(this._langService.appLanguage),
    coll: (collectionData(this._query, { idField: 'UID' }) as Observable<RawTool[]>)
  }).pipe(
    map(({ coll, currLang }) => {
      return coll.map(t => {
        return <Tool>{
          ...t,
          level: t.level[currLang]
        }
      });
    })
  );
}
