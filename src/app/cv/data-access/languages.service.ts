import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';

export type Language = {
  Desc: string;
  Level: string;
  ImgUrl: string;
};

@Injectable()
export class LaguangesService {
  private readonly _fs = inject(Firestore);
  private readonly _expColl = collection(this._fs, 'languages');
  public readonly langs$ = (collectionData(this._expColl, { idField: 'UID' }) as Observable<Language[]>).pipe(
    shareReplay()
  );
}
