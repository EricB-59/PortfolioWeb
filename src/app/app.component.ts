import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutComponent } from './about/about.component';
import { ExperienciesComponent } from './experiencies/experiencies.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationComponent, AboutComponent, ExperienciesComponent, ProjectsComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioWeb';
}
