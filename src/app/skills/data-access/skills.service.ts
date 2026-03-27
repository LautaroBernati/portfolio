import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';

type Example = {
  Title: string;
  Desc: string;
  Urls?: {
    Repository: string | null;
    Deployment: string | null;
  },
  ImgUrl: string;
  Type: string;
};

export type Skill = {
  UID: string;
  Framework: string;
  Icon: IconDefinition;
  Info: string;
  Progress: number;
  Examples: Array<Example>;
};

type StrippedExample = Omit<Example, 'Img'>;
export type StrippedSkill = Omit<Skill, 'Icon' | 'Examples'> & { Examples: Array<StrippedExample> };

@Injectable()
export class SkillsService {
  private readonly _coll = collection(this._firestore, 'skills');

  public readonly strippedSkills$ = (collectionData(this._coll, { idField: 'UID' }) as Observable<StrippedSkill[]>);

  constructor(
    private readonly _http: HttpClient,
    private readonly _firestore: Firestore,
  ) { }

  obtenerImagen(ruta: string) {
    return this._http.get(ruta, { responseType: 'blob' });
  }
}
