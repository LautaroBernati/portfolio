import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Firestore, collection, collectionData, doc, orderBy, query } from '@angular/fire/firestore';
import { Observable, combineLatest, map, shareReplay } from 'rxjs';
import { LanguageService } from '../../shared/services';
import { TranslatedDocument } from '../../shared/types/translated-coll.type';

type SkillCvItemRaw = {
	name: string;
	level: TranslatedDocument<string>;
	UID: string;
}

export type SkillCvContainer = {
	desc: string;
	items: SkillCvItem[];
}

type SkillCvItem = {
	id: string;
	name: string;
	level: string;
}

@Injectable()
export class SkillsCvService {
	private readonly _fs = inject(Firestore);
	private readonly _doc = doc(this._fs, 'cv', 'skills');
	private readonly _backendColl = collection(this._doc, 'backend');
	private readonly _dbColl = collection(this._doc, 'db');
	private readonly _frontendColl = collection(this._doc, 'front');
	private readonly _langService = inject(LanguageService);

	public readonly skills$: Observable<SkillCvContainer[]> = combineLatest({
		beColl: (collectionData(query(this._backendColl, orderBy('order', 'asc')), { idField: 'UID' }) as Observable<SkillCvItemRaw[]>),
		feColl: (collectionData(query(this._frontendColl, orderBy('order', 'asc')), { idField: 'UID' }) as Observable<SkillCvItemRaw[]>),
		dbColl: (collectionData(query(this._dbColl, orderBy('order', 'asc')), { idField: 'UID' }) as Observable<SkillCvItemRaw[]>),
		currLang: toObservable(this._langService.appLanguage),
	}).pipe(
		shareReplay({ refCount: true, bufferSize: 1 }),
		map(({ currLang, beColl, feColl, dbColl }): SkillCvContainer[] => {
			return [
				this._toContainerFixed(feColl, 'Frontend', currLang),
				this._toContainerFixed(beColl, 'Backend', currLang),
				this._toContainerFixed(dbColl, currLang === 'en' ? 'Databases' : 'Bases de Datos', currLang),
			];
		})
	);

	private _toContainerFixed(raw: SkillCvItemRaw[], folderName: string, lang: 'es' | 'en'): SkillCvContainer {
		return {
			desc: folderName,
			items: raw.map(item => ({ ...item, level: item.level[lang], id: item.UID })),
		};
	}
}
