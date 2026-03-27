import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';


export declare type Methodology = {
  Desc: string;
  Percent: number;
};

@Injectable()
export class MethodologiesService {
  private readonly _fs = inject(Firestore);
  private readonly _methdsColl = collection(this._fs, 'methodologies');
  public readonly methodologies$ = (collectionData(this._methdsColl, { idField: 'UID' }) as Observable<Methodology[]>).pipe(
    shareReplay()
  );
}
