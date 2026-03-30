import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';


export declare type Tool = {
  Desc: string;
  Percent: number;
};

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private readonly _fs = inject(Firestore);
  private readonly _toolsColl = collection(this._fs, 'tools');
  private readonly _query = query(this._toolsColl, orderBy('order', 'asc'));

  public readonly tools$ = (collectionData(this._query, { idField: 'UID' }) as Observable<Tool[]>).pipe(
    shareReplay()
  );
}
