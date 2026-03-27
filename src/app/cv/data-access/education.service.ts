import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';
import { Experience } from './experiences.service';

export type Education = Omit<Experience, 'Tech'>;

@Injectable()
export class EducationService {
  private readonly _fs = inject(Firestore);
  private readonly _expColl = collection(this._fs, 'education');
  private readonly _query = query(this._expColl, orderBy('Order', 'asc'));

  public readonly experiences$ = (
    collectionData(this._query, { idField: 'UID' }) as Observable<Education[]>
  ).pipe(
    shareReplay({ bufferSize: 1, refCount: false }),
  );
}
