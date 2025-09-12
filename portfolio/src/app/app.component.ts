import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './components/socials/socials.component';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    SocialsComponent,
    MatCardModule,MainComponent,AboutComponent,FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('homeRoute') home!: ElementRef;
  @ViewChild('aboutRoute') about!: ElementRef;
  @ViewChild('contactRouter') contact!: ElementRef;
  @ViewChild('projectsRoute') projects!: ElementRef;
  
  name: string = 'Andile Mazibuko';
  isDark: boolean = false;

  toogleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');
    const weather = document.getElementById('weather');
    this.isDark = !this.isDark;

    //add-lightTheme
    if (this.isDark) {
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      themeBtn?.classList.add('add-lightTheme');
    }
    // AIM: Restart the animation
    if (weather) {
      weather.classList.remove('weather');
      weather.classList.add('weather');
      weather.style.animation =
        'moveUpTheme 5s ease-in, floatEffect 3s ease-in-out infinite';
    }
  }
  isRouteActive(){
    
  }
}
