import { Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemesService {
  private readonly _theme = signal<AppTheme>('dark');

  public readonly theme = this._theme.asReadonly();

  public setTheme(theme: AppTheme): void {
    this._theme.set(theme);
  }
}
