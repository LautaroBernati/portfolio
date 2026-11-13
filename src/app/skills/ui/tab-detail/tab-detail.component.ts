import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { distinctUntilChanged, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Example, Skill } from '../../data-access/skills.service';

type CustomType = Example & { showMore: boolean };

@Component({
  selector: 'sk-tab-detail-ui',
  templateUrl: 'tab-detail.component.html',
  styleUrls: ['tab-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class TabDetailComponent {
  private readonly _breakpointObserver = inject(BreakpointObserver);
  private static readonly MAX_LENGTH_MOBILE = 150;
  private static readonly MAX_LENGTH_WEB = 600;

  public readonly descripcion = input<string>();
  public readonly dialog = inject(MatDialog);
  public readonly expanded = input<boolean>();
  public readonly loading = input<boolean>();
  public readonly skill = input<
    (Skill & { Examples: CustomType[] }) | undefined,
    Skill | undefined
  >(undefined, {
    transform: (
      value: Skill | undefined,
    ):
      | (Skill & { Examples: CustomType[] })
      | undefined => {
      return !value
        ? undefined
        : {
          ...value,
          Examples: value.Examples.map(
            (e): CustomType => ({
              ...e,
              showMore: false,
            }),
          ),
        };
    },
  });
  public readonly isMobile$ = this._breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      distinctUntilChanged(),
    );

  public readonly maxLength$ = this.isMobile$.pipe(
    map((isMobile) =>
      isMobile
        ? TabDetailComponent.MAX_LENGTH_MOBILE
        : TabDetailComponent.MAX_LENGTH_WEB,
    ),
  );

  public getColor(progress: number) {
    const red = Math.min(255, Math.round(((100 - progress) * 255) / 50)); // Red component
    const green = Math.min(255, Math.round((progress * 255) / 50)); // Green component

    // Return the color as an RGB string
    return `rgb(${red}, ${green}, 0)`;
  }

  public getImgSrc(item: CustomType): string {
    return (environment.origin + item.ImgUrl);
  }

  public onImgClick(img: string, width: number, height: number) {
    this.dialog.open(ImageDetailDialog, <MatDialogConfig>(
      (<unknown>{ data: img, width: width + 60, height: height + 80 })
    ));
  }
}

@Component({
  selector: 'sk-tab-detail-dialog-ui',
  template: `
    <div
      style="display: flex; flex-direction: column; padding: 0.5rem; align-items: center"
    >
      <div style="margin-bottom: 0.5rem; align-self: flex-end;">
        <button
          type="button"
          mat-icon-button
          color="warn"
          aria-label="Button with cross icon"
          mat-dialog-close
        >
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <img
        [style.max-width]="'95%'"
        [style.max-height]="'80%'"
        [src]="data"
        alt="Image_detail"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ImageDetailDialog {
  public readonly data = inject(MAT_DIALOG_DATA);
}
