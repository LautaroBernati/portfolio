import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';


export declare type Tool = {
  Desc: string;
  Percent: number;
};

@Injectable()
export class ToolsService {
  private readonly _fs = inject(Firestore);
  private readonly _toolsColl = collection(this._fs, 'tools');
  public readonly tools$ = (collectionData(this._toolsColl, { idField: 'UID' }) as Observable<Tool[]>).pipe(
    shareReplay()
  );
}
