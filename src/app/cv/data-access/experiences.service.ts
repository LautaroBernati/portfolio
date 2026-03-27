import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';

export type Experience = {
  Title: string;
  Subtitle: string;
  Description: string;
  Tech?: string;
  From: number;
  To: number;
  LogoUrl?: string;
};

@Injectable()
export class ExperiencesService {
  private readonly _fs = inject(Firestore);
  private readonly _expColl = collection(this._fs, 'experiences');
  private readonly _query = query(this._expColl, orderBy('Order', 'asc'));

  public readonly experiences$ = (
    collectionData(this._query, { idField: 'UID' }) as Observable<Experience[]>)
      .pipe(
        shareReplay()
      );
}
