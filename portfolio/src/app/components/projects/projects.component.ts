import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/Models';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule, FooterComponent, MatDividerModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  

  ngOnInit(): void {

  }

  openGitHub() {
    window.open('https://github.com/Andile-mazibuko', '_blank', 'noopener,noreferrer');
  }
}
