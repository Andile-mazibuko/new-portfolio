import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  skills: string[] = [];
  smallDescription =
    'dadsadsadsad asddfsfcsaa dsad sfd asdd   sadsadad dsad sd s a  ad adasd dsadsad s ad adadsd';
  ngOnInit(): void {
    this.skills = ['Front e', '', '', ''];
  }
}
