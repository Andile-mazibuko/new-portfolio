import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('Stars') stars!: ElementRef;
  name: string = 'Andile Mazibuko';
  isDark: boolean = false;
  randStars: string[] = [];

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // get the active route and add the active-route class to it
    this.isRouteActive(window.location.pathname.split('/')[1]);
  }
  ngAfterViewInit() {
    
    this.createRandomStars();
    this.flashRandomStars();
  }

  toogleTheme() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const body = this.document.body;
    const themeBtn = this.document.getElementById('themeBtn');
    const weather = this.document.getElementById('weather');

    if (!weather) {
      alert('Theme can not be changed at this time');
      return;
    }
    body.classList.add('changeTheme')
    weather.classList.remove('weather');
    weather.classList.add('change-theme-weather');

    setTimeout(() => {
      this.isDark = !this.isDark;

      if (this.isDark) {
        body.classList.add('light-theme');
        this.stars.nativeElement.style.display = 'none';
      } else {
        body.classList.remove('light-theme');
        themeBtn?.classList.add('add-lightTheme');
        this.stars.nativeElement.style.display = 'flex';
      }
      // weather.style.left = '30%';
      // weather.style.top = '10%';
      weather.classList.remove('change-theme-weather');
      weather.classList.add('weather');
    }, 2000);
  }

  /**
   * Generate 120 stars for mobile devices 
   * Generate 80 for other types of devices
   */
  createRandomStars() {
    if (typeof window === 'undefined') return; // skip on server

    for (let index = 0; index < (window.innerWidth < 820 ? 120: 80); index++) {
      const style = this.document.createElement('style');
      const left = Math.floor(Math.random() * 100);
      const top = Math.floor(Math.random() * 100);
      const randFloat = Math.floor(Math.random() * 200);
      style.innerHTML = `
      @keyframes twinkle {
        0%, 100% 
        { 
          opacity: 1; transform: scale(1);
          z-index: 5;
          width: ${window.innerWidth < 820 ? "2px": "5px"};
          height:${ window.innerWidth < 820 ? "2px": "5px"};
        }
        50% 
        { 
          opacity: 0.3; transform: scale(1.2); 
          z-index: -6;
          width: ${window.innerWidth < 820 ? "5px": "8px"};
          height:${ window.innerWidth < 820 ? "5px": "8px"};
          
        }
      }
      @keyframes star-float {
        0%,100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(${randFloat}px);
        }
      }
      `;

      this.document.head.appendChild(style);
      const div = this.document.createElement('div');
      div.id = `star_${index}`;
      div.style.width = window.innerWidth < 820 ? "2px": "5px"
      div.style.height = window.innerWidth < 820 ? "2px": "5px"
      div.style.borderRadius = '50%';
      div.style.background = '#ffffffff';
      div.style.position = 'absolute';
      div.style.left = left + '%';
      div.style.top = top + '%';
      div.style.animation = `twinkle 3s ease-in ${Math.random() * 3}s infinite`;
      div.style.boxShadow = ' box-shadow: var(--theme-shadow)';
      this.stars.nativeElement.appendChild(div);
    }
  }
  /**
   * Generate random numbers to represent div ids
   * @returns an array of formatterd random div ids
   */
  createRandomIds(): void {
    if (typeof window === 'undefined') return; // skip on server
    
    for (let index = 0; index < 30; index++) {
      const randDivId = 'star_' + Math.floor(Math.random() * 80);
      if (!this.randStars.includes(randDivId)) {
        this.randStars[index] = randDivId;
      }
    }
  }
  flashRandomStars(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.createRandomIds();
    this.randStars.forEach((starId) => {
      const div = this.document.getElementById(starId);
      if (!div) {
        return;
      }

      div.style.animation = `twinkle 3s ease-in ${
        Math.random() * 3
      }s infinite ,star-float ${
        10 + Math.floor(Math.random() * 30)
      }s  ease-in ${Math.floor(Math.random() * 10)}s infinite`;
    });
  }
  isRouteActive(route: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const clickedRoute = this.document.getElementById(route);
    const navLinksNodeList = this.document.querySelectorAll('.nav-link'); // NodeList
    if (!clickedRoute) {
      return;
    }

    navLinksNodeList.forEach((element) => {
      alert;
      if (element.id == route) {
        element.classList.add('active-route');
      } else {
        element.classList.remove('active-route');
      }
    });
  }
}
