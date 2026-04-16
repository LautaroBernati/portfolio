import { Component, computed, input, ViewEncapsulation } from '@angular/core';

export type SkeletonSize = 'sm' | 'md' | 'lg';
export type SkeletonType =
  | 'avatar'
  | 'body-row'
  | 'button'
  | 'header-row'
  | 'icon-button'
  | 'paragraph'
  | 'text';

export interface SkeletonConfig {
  type: SkeletonType;
  size?: SkeletonSize;
  width?: string;
  lines?: number;
  widths?: string[];
  leftWidth?: string;
}

@Component({
  selector: 'app-skeleton-loader-ui',
  standalone: true,
  templateUrl: 'skeleton-loader.component.html',
  styleUrls: ['skeleton-loader.component.scss'],
  host: {
    '[style.width]': 'width() ?? "min-content"',
    '[style.height]': 'height() ?? "16px"',
  },
  encapsulation: ViewEncapsulation.None
})
export class SkeletonLoaderComponent {
  type = input<SkeletonType>('text');
  size = input<SkeletonSize>('md');
  height = input<string | undefined>(undefined);
  width = input<string | undefined>(undefined);
  widths = input<string[]>([]);
  leftWidth = input<string | undefined>(undefined);

  avatarClasses = computed(() => {
    return `skeleton-base skeleton-avatar`;
  });

  textClasses = computed(() => {
    return `skeleton-base skeleton-text type-${this.type()}`;
  });

  buttonClasses = computed(() => {
    return `skeleton-base skeleton-button size-${this.size()}`;
  });

  iconButtonClasses = computed(() => {
    return `skeleton-base skeleton-icon-button`;
  });
}
