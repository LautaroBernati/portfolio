import { Injectable, signal } from '@angular/core';
import { AppTheme } from '../types';

@Injectable({ providedIn: 'root' })
export class ThemesService {
  private readonly _theme = signal<AppTheme>('light');

  public readonly theme = this._theme.asReadonly();

  public setTheme(theme: AppTheme): void {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    this._theme.set(theme);
  }
}
