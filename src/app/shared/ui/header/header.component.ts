import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly darkMode = new FormControl(false, { nonNullable: true });
  public readonly moonIcon = faMoon;
  public readonly sunIcon = faSun;
  public readonly language = new FormControl('en', { nonNullable: true });
  private readonly _translateService = inject(TranslateService);
  private readonly _spinner = inject(NgxSpinnerService);

  constructor() {
    const document = inject(DOCUMENT);
    document.body.classList.add('mat-app-background');
    this.darkMode.valueChanges.subscribe(value => {
      if (value) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  switchLang(lang: string) {
    this.language.patchValue(lang);
    this._translateService.use(lang).subscribe({
      next: () => this._spinner.show(),
      error: err => console.error(err),
      complete: () => this._spinner.hide(),
    });
  }
}
