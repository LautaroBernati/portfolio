import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../data-access/languages.service';

@Component({
  selector: 'cv-lang-item-ui',
  templateUrl: 'lang.component.html',
  styleUrls: ['lang.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageItemComponent {
  @Input('item') public item: Language | null = null;
}
