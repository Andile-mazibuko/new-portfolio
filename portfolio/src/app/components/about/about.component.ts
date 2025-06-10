import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CardSkill } from '../../models/skill';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, MatTabsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  skills: CardSkill[] = [];
  smallDescription =
    'Full Stack Developer passionate about building modern web experiences';
  ngOnInit(): void {
    this.skills = [
      {
        icon: 'code',
        name: 'Full Stack Developer',
      },
      {
        icon: 'tv',
        name: 'Anime',
      },
      {
        icon: 'sports_esports',
        name: 'Gaming',
      },
      {
        icon: 'headphones',
        name: 'Code with Music',
      },
      {
        icon: 'school',
        name: 'Diploma Holder',
      },
    ];
  }
}
