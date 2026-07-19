import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { About, CardSkill, Experience, Skill } from '../../models/Models';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ExperienceService } from '../../services/experience.service';
import { AboutService } from '../../services/about.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from "../footer/footer.component";
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatTabsModule,
    CommonModule,
    MatProgressBarModule,
    FooterComponent,
    MatDividerModule
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  // Cards diplayed under the About title
  skills: CardSkill[] = [];
  experiences: Experience[] = [];
  oddExperiences: Experience[] = [];
  evenExperiences: Experience[] = [];
  frontEndSkills: Skill[] = [];
  backEndSkills: Skill[] = [];
  tools: Skill[] = [];
  allSkills: Skill[] = []; // To be used for mobile devices only
  about!: About

  //My passion - displayed on the home route
  smallDescription =
    'Full Stack Developer passionate about building modern web experiences';

  constructor(private exp: ExperienceService, private aboutServ: AboutService) {}

  ngOnInit(): void {
    this.getSkiils();
    this.getUserAbout()
    // add skills on init
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
        name: 'CS Graduate',
      },
    ];
    this.populateExpArray();
    this.oddExperiences = this.experiences.filter((exp) => exp.odd);
    this.evenExperiences = this.experiences.filter((exp) => !exp.odd);
    // console.log(this.experiences);
  }

  //get Data from the json file and store it inside the array
  populateExpArray(): void {
    this.exp.getExpiriences().subscribe((data: Experience[]) => {
        this.experiences = data.map((exp, index) => ({
          ...exp,
          odd: index % 2 !== 0
        }));
      });
  }

  getSkiils(): void {
    this.aboutServ.getSkills().subscribe((data: Skill[]) => {
      this.allSkills = data;
      this.frontEndSkills = data.filter((skill) => skill.type === 'frontend');
      this.backEndSkills = data.filter((skill) => skill.type === 'backend');
      this.tools = data.filter((skill) => skill.type === 'tool');
    });
  }
  getUserAbout(): void{
    this.aboutServ.getUserAbout().subscribe(data =>{
      this.about = data
    })
  }
}
