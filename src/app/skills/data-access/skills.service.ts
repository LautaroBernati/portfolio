import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { map, Observable } from 'rxjs';

export type Example = {
  Title: string;
  Desc: string;
  Urls?: {
    Repository: string | null;
    Deployment: string | null;
  },
  ImgUrl: string;
  Type: string;
  order?: number;
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
  private readonly _firestore = inject(Firestore);
  private readonly _http = inject(HttpClient);

  private readonly _coll = collection(this._firestore, 'skills');

  public readonly strippedSkills$ = (collectionData(this._coll, { idField: 'UID' }) as Observable<StrippedSkill[]>).pipe(
    map(skills => skills.map(skill => ({
      ...skill,
      Examples: [...skill.Examples].sort((a, b) => {
        if (a.order === undefined) return 1;
        if (b.order === undefined) return -1;
        return a.order - b.order;
      })
    })))
  );

  constructor() { }

  obtenerImagen(ruta: string) {
    return this._http.get(ruta, { responseType: 'blob' });
  }
}
