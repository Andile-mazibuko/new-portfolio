import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/Models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = []
  constructor(private projServ: ProjectsService) {}

  ngOnInit(): void {
    this.projServ.getProjects().subscribe((data:Project[]) =>{
      this.projects = data
    })
  }
  formatNumber(num:number): string{
    return  num < 10 ? '0' + num : num +"";
  }
}
