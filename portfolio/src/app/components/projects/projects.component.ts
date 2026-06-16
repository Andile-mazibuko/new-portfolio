import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/Models';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(
    private projServ: ProjectsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  titleColors: string[] = ['Orangered', '', 'Lime'];

  ngOnInit(): void {
    this.titleColors = ['Orangered', '', 'Lime'];
    this.projServ.getProjects().subscribe((data: Project[]) => {
      this.projects = data;

      
      
    });
    // Change Header colors to match the primary color of a project
    if (isPlatformBrowser(this.platformId)) {
      for (let index = 0; index < this.projects.length; index++) {
        const header = document.getElementById(this.projects[index].name);
        if (header) {
          header.style.color = this.titleColors[index];
        }
      }
    }
  }
  formatNumber(num: number): string {
    return num < 10 ? '0' + num : num + '';
  }
}
