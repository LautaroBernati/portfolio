import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { TranslatedDocument } from '../types/translated-coll.type';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

type RawTool = {
  Desc: string;
  Percent: number;
  level: TranslatedDocument<string>;
};

export type Tool = Omit<RawTool, 'level'> & {
  level: string
}

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private readonly _fs = inject(Firestore);
  private readonly _toolsColl = collection(this._fs, 'tools');
  private readonly _query = query(this._toolsColl, orderBy('order', 'asc'));
  private readonly _translateService = inject(TranslateService);

  public readonly tools$: Observable<Tool[]> = combineLatest({
    currLang: this._translateService.onLangChange.pipe(
      startWith(<LangChangeEvent>{
        lang: this._translateService.getCurrentLang()
      }),
    ),
    coll: (collectionData(this._query, { idField: 'UID' }) as Observable<RawTool[]>)
  }).pipe(
    map(({ coll, currLang }) => {
      const lang = currLang.lang as 'en' | 'es';
      const result = coll.map(t => {
        return <Tool>{
          ...t,
          level: t.level[lang]
        }
      })
      return result;
    })
  );
}
