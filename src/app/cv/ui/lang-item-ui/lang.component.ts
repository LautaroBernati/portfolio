
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../data-access/languages.service';

@Component({
    selector: 'cv-lang-item-ui',
    templateUrl: 'lang.component.html',
    styleUrls: ['lang.component.scss'],
    imports: [TranslateModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageItemComponent {
  @Input('item') public item: Language | null = null;
}
