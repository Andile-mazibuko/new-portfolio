import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name: string = 'Andile Mazibuko';
  isDark: boolean = false;

  toogleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');
    this.isDark = !this.isDark;

    //add-lightTheme
    if (this.isDark) {
        body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      themeBtn?.classList.add('add-lightTheme');
    }
  }
}
