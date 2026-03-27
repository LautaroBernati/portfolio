import { ChangeDetectionStrategy, Component, Inject, input, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Skill } from '../../data-access/skills.service';

@Component({
  selector: 'sk-tab-detail-ui',
  templateUrl: 'tab-detail.component.html',
  styleUrls: ['tab-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabDetailComponent {
  public readonly descripcion = input<string>();
  public readonly expanded = input<boolean>();
  public readonly loading = input<boolean>();
  public readonly skill = input<Skill>();

  constructor(public dialog: MatDialog) { }

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
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
