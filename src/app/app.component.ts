import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutPage } from './about/about.page';
import { CVMainPage } from './cv/feature/cv-main/cv-main.page';
import { HomePage } from './home/home.page';
import { ThemesService } from './shared/services/themes.service';
import { HeaderModule } from './shared/ui/header/header.module';
import { SkillsPage } from './skills/feature/skills-main/skills-main.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    AboutPage,
    CVMainPage,
    FontAwesomeModule,
    HeaderModule,
    HomePage,
    MatProgressSpinnerModule,
    SkillsPage
  ]
})
export class AppComponent {
  public readonly title = 'app-portfolio-lb';
  private readonly _themesService = inject(ThemesService);

  public readonly appTheme = this._themesService.theme;
}
