import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, orderBy, query } from '@angular/fire/firestore';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable, combineLatest, map, shareReplay, startWith } from 'rxjs';
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

	private readonly _translateService = inject(TranslateService);

	public readonly skills$: Observable<SkillCvContainer[]> = combineLatest({
		beColl: (collectionData(query(this._backendColl, orderBy('order', 'asc')), { idField: 'UID' }) as Observable<SkillCvItemRaw[]>),
		feColl: (collectionData(query(this._frontendColl, orderBy('order', 'asc')), { idField: 'UID' }) as Observable<SkillCvItemRaw[]>),
		dbColl: (collectionData(query(this._dbColl, orderBy('order', 'asc')), { idField: 'UID' }) as Observable<SkillCvItemRaw[]>),
		currLang: this._translateService.onLangChange.pipe(
			startWith(<LangChangeEvent>{
				lang: this._translateService.getCurrentLang()
			}),
		),
	}).pipe(
		shareReplay({ refCount: true, bufferSize: 1 }),
		map(({ currLang, beColl, feColl, dbColl }): SkillCvContainer[] => {
			const lang = currLang.lang as 'en' | 'es';

			return [
				this._toContainerFixed(feColl, 'Frontend', lang),
				this._toContainerFixed(beColl, 'Backend', lang),
				this._toContainerFixed(dbColl, lang === 'en' ? 'Databases' : 'Bases de Datos', lang),
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
