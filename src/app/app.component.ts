import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs';
import { AboutPage } from './about/about.page';
import { CVMainPage } from './cv/feature/cv-main/cv-main.page';
import { HomePage } from './home/home.page';
import { HeaderModule } from './shared/ui/header/header.module';
import { SkillsPage } from './skills/feature/skills-main/skills-main.page';
import { ThemesService } from './shared/services/themes.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    HomePage,
    MatProgressSpinnerModule,
    HeaderModule,
    FontAwesomeModule,
    CVMainPage,
    AboutPage,
    SkillsPage,
    JsonPipe
  ]
})
export class AppComponent {
  public readonly title = 'app-portfolio-lb';
  private readonly _themesService = inject(ThemesService);

  public readonly appTheme = this._themesService.theme;

  constructor() {}
}
