import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
    MatCardModule,
    MainComponent,
    AboutComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('Stars') stars!: ElementRef;
  name: string = 'Andile Mazibuko';
  isDark: boolean = false;
  randStars: string[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //Create 100 stars not equal in size
  }
  ngAfterViewInit() {
    this.createRandomStars();
    this.flashRandomStars();
  }

  toogleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');
    const weather = document.getElementById('weather');
    this.isDark = !this.isDark;

    //add-lightTheme
    if (this.isDark) {
      body.classList.add('light-theme');
      //this.createRandomStars();
      this.stars.nativeElement.style.display = 'none'
    } else {
      body.classList.remove('light-theme');
      themeBtn?.classList.add('add-lightTheme');
      this.stars.nativeElement.style.display = 'flex'
    }
    // AIM: Restart the animation
    if (weather) {
      weather.classList.remove('weather');
      weather.classList.add('weather');
      weather.style.animation =
        'moveUpTheme 5s ease-in, floatEffect 3s ease-in-out infinite';
    }
  }
  createRandomStars() {
    for (let index = 0; index < 100; index++) {
      const div = document.createElement('div');
      div.id = `star_${index}`;
      div.style.width = '5px';
      div.style.height = '5px';
      div.style.borderRadius = '2.5px';
      div.style.background = '#ffffffff';
      div.style.position = 'absolute';
      div.style.left = Math.floor(Math.random() * 100) + '%';
      div.style.top = Math.floor(Math.random() * 100) + '%';
      div.style.animation = `flash 3s ease-in ${Math.random() * 3}s infinite`;
      div.style.boxShadow = ' box-shadow: var(--theme-shadow)';
      this.stars.nativeElement.appendChild(div);
    }
  }
  /**
   * Generate random numbers to represent div ids
   * @returns an array of formatterd random div ids
   */
  createRandomIds(): void {
    for (let index = 0; index < 10; index++) {
      const randDivId = 'star_' + Math.floor(Math.random() * 80);
      if (!this.randStars.includes(randDivId)) {
        this.randStars[index] = randDivId;
      }
    }
  }
  flashRandomStars(): void {
    this.createRandomIds();
    this.randStars.forEach((starId) => {
      const div = document.getElementById(starId);
      if(!div){
        return
      }
      div.style.borderRadius = "0"
      div.style.transform = 'rotate(45deg)'
      div.style.background = 'yellow';
      div.style.zIndex = '10';
      div.style.position = 'fixed';
      div.classList.add("twinkle")
    });
  }
  isRouteActive(route: string): void {
    const clickedRoute = document.getElementById(route);
    const navLinksNodeList = document.querySelectorAll('.nav-link'); // NodeList
    if (!clickedRoute) {
      return;
    }

    navLinksNodeList.forEach((element) => {
      alert
      if (element.id == route) {
        element.classList.add('active-route');
      }else{
        element.classList.remove('active-route');
      }
    });
  }
}
