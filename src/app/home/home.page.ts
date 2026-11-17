
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';
import Typed, { TypedJsOptions } from 'typed.js';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    TranslatePipe
  ],
})
export class HomePage implements OnInit, OnDestroy {
  private _fixedTypedInstahce?: Typed;
  private _typedInstance?: Typed;

  public readonly faGithub = faGithub;
  public readonly faLinkedinIn = faLinkedinIn;
  public readonly imgSrc = environment.origin + 'assets/images/profile-pic-3.jpeg';

  constructor() { }

  ngOnDestroy(): void {
    this._typedInstance?.destroy();
    this._fixedTypedInstahce?.destroy();
  }

  ngOnInit(): void {
    this._fixedTypedInstahce = this.createTyped(
      '.fixed-typed',
      ['', 'Component → Action → Reducer → Store → Selector', 'Action → Reducer → Effect → Action', 'Observable → Pipe → Operator → Subscriber'],
      3500
    );
  }

  public curateText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  private createTyped(cssName: string, strings: string[], backDelay = 2000) {
    this._typedInstance?.destroy();
    const options: TypedJsOptions = {
      strings,
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      backDelay,
    };
    return new Typed(cssName, options);
  }
}
