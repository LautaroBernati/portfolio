import { Injectable } from '@angular/core';

export const STORAGE_KEYS = {
  LANGUAGE: 'lb_portfolio.language',
  THEME:    'lb_portfolio.theme',
} as const;

type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];

@Injectable({ providedIn: 'root' })
export class StorageService {
  get<T>(key: StorageKey): T | null {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  set<T>(key: StorageKey, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: StorageKey): void {
    localStorage.removeItem(key);
  }
}
