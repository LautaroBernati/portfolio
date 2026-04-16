import { ChangeDetectionStrategy, Component, inject, Inject, input, Input, Signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Example, Skill } from '../../data-access/skills.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'sk-tab-detail-ui',
  templateUrl: 'tab-detail.component.html',
  styleUrls: ['tab-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabDetailComponent {
  private readonly _breakpointObserver = inject(BreakpointObserver);
  private static readonly MAX_LENGTH_MOBILE = 150;
  private static readonly MAX_LENGTH_WEB = 600;

  public readonly descripcion = input<string>();
  public readonly dialog = inject(MatDialog);
  public readonly expanded = input<boolean>();
  public readonly loading = input<boolean>();
  public readonly skill = input<Skill & { Examples: (Example & { showMore: boolean })[] } | undefined, Skill | undefined>(undefined, {
    transform: (value: Skill | undefined): Skill & { Examples: (Example & { showMore: boolean })[] } | undefined => {
      return (!value) ? undefined :
        {
          ...value,
          Examples: value.Examples.map((e): Example & { showMore: boolean } => ({ ...e, showMore: false }))
        };
    }
  });
  public readonly isMobile$ = this._breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    distinctUntilChanged(),
  );

  public readonly maxLength$ = this.isMobile$.pipe(
    map(isMobile => isMobile ? TabDetailComponent.MAX_LENGTH_MOBILE : TabDetailComponent.MAX_LENGTH_WEB),
  );

  constructor() { }

  onImgClick(img: string, width: number, height: number) {
    this.dialog.open(ImageDetailDialog, <MatDialogConfig><unknown>{ data: img, width: width + 60, height: height + 80 });
  }

  getColor(progress: number) {
    const red = Math.min(255, Math.round((100 - progress) * 255 / 50)); // Red component
    const green = Math.min(255, Math.round((progress) * 255 / 50)); // Green component

    // Return the color as an RGB string
    return `rgb(${red}, ${green}, 0)`;
  }
}

@Component({
  selector: 'sk-tab-detail-dialog-ui',
  template: `
  <div style="display: flex; flex-direction: column; padding: 0.5rem; align-items: center">
    <div style="margin-bottom: 0.5rem; align-self: flex-end;">
      <button type="button" mat-icon-button color="warn" aria-label="Button with cross icon" mat-dialog-close>
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <img
      [style.max-width]="'95%'"
      [style.max-height]="'80%'"
      [src]="data"
      alt="Image_detail"
    >
  </div>
  `,
})
export class ImageDetailDialog {
  public readonly data = inject(MAT_DIALOG_DATA);
}
