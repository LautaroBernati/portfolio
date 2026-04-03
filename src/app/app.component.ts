import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs';
import { HomePage } from './home/home.page';
import { SpinnerModule } from './shared/spinner/spinner.module';
import { HeaderModule } from './shared/ui/header/header.module';
import { CVMainPage } from './cv/feature/cv-main/cv-main.page';
import { AboutPage } from './about/about.page';
import { SkillsPage } from './skills/feature/skills-main/skills-main.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    SpinnerModule,
    HomePage,
    MatProgressSpinnerModule,
    HeaderModule,
    FontAwesomeModule,
    CVMainPage,
    AboutPage,
    SkillsPage,
  ]
})
export class AppComponent {
  public readonly title = 'app-portfolio-lb';
  private readonly translate = inject(TranslateService);
  private readonly spinner = inject(NgxSpinnerService);
  private readonly router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(value => (value instanceof RouteConfigLoadStart || value instanceof RouteConfigLoadEnd)),
    ).subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.spinner.show();
      } else if (event instanceof RouteConfigLoadEnd) {
        this.spinner.hide();
      }
    });
  }
}
