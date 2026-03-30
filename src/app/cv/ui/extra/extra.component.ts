import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SkeletonLoaderComponent } from 'src/app/shared/skeleton-loader/skeleton-loader.component';

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    SkeletonLoaderComponent,
  ],
  selector: 'cv-extra-card-ui',
  templateUrl: 'extra.component.html',
  styleUrls: ['extra.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtraCardComponent {
  public readonly header = input<string>();
  public readonly items = input<string[] | null>(null);
  public readonly loading = input<boolean>(false);
  public readonly setHeader = input<boolean>(true);
}
