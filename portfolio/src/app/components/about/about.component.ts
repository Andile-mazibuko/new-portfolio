import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CardSkill } from '../../models/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  skills: CardSkill[] = [];
  smallDescription =
    'dadsadsadsad asddfsfcsaa dsad sfd asdd   sadsadad dsad sd s a  ad adasd dsadsad s ad adadsd';
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
