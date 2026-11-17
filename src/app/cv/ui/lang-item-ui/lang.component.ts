
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Language } from '../../data-access/languages.service';

@Component({
    selector: 'cv-lang-item-ui',
    templateUrl: 'lang.component.html',
    styleUrls: ['lang.component.scss'],
    imports: [TranslatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageItemComponent {
  @Input('item') public item: Language | null = null;
}
