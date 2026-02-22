import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';
import { AboutService } from '../../services/about.service';
import { About, Skill } from '../../models/Models';
import { SocialsComponent } from '../socials/socials.component';
import { interval } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { SummaryComponent } from '../summary/summary.component';
import { CategoriesComponent } from '../categories/categories.component';
import { count } from 'node:console';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    SocialsComponent,
    MatCardModule,
    SummaryComponent,
    FooterComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  @ViewChild('componentContainer', { read: ViewContainerRef })
  componentContainer!: ViewContainerRef;
  constructor(
    private dialog: MatDialog,
    private aboutServ: AboutService,
    private ngZone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) {}
  about!: About;
  userSkills: Skill[] = [];
  displaySkills: Skill[] = [];
  numbers: number[] = [];
  intervalId: any;
  displaySkill: Skill = this.displaySkills[0];
  secondsCounter = 0;
  summaryComponents = [CategoriesComponent, SummaryComponent];

  // random number containers
  randLeft!: string;
  randTop!: string;
  randDisplay: number = 0;
  arrCount = 0;

  ngOnInit(): void {
    this.aboutServ.setUserAbout();
    this.aboutServ.getUserAbout().subscribe((resp: About) => {
      this.about = resp;
    });
    this.randLeft = 10 + Math.floor(Math.random() * 90) - 10 + '%';
    this.randTop = Math.floor(Math.random() * 90) + '%';
    this.randDisplay = Math.floor(Math.random() * 4);

    this.aboutServ.getSkills().subscribe((resp: Skill[]) => {
      this.userSkills = resp;
      const nameCardCont = document.getElementById('nameCardCont');
      if (nameCardCont) {
        nameCardCont.style.animation = 'none';
      }

      this.reArrangeSkills();
      this.displaySkill = this.displaySkills[this.randDisplay];
      nameCardCont!.style.animation = 'opacityTrans 3s ease-in-out';
    });

    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.reArrangeSkills();
        this.displaySkill = this.displaySkills[this.randDisplay];
        this.randLeft = Math.floor(Math.random() * 90) + '%';
        this.randTop = 10 + Math.floor(Math.random() * 90) + '%'; // to not display anything above the nav bar
        //console.log(this.displaySkills)
        this.changeDetector.detectChanges(); // Detect changes and update the array on html side
        this.secondsCounter++;

        // if (this.secondsCounter % 3 === 0) {
        //   this.componentContainer.clear();

        //   if (this.arrCount === this.summaryComponents.length-1) {
        //     this.componentContainer.createComponent(
        //       this.summaryComponents[this.arrCount]
        //     );

        //     this.arrCount = 0;
        //   }else{
        //     this.componentContainer.createComponent(
        //       this.summaryComponents[this.arrCount]
        //     );
        //     this.arrCount++;
        //   }
          
        // }
      }, 5000);
    });
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  ngAfterViewInit() {
    // this.componentContainer.createComponent(SummaryComponent);
  }

  //Open Email Dialog box component
  openEmailDialog(): void {
    this.dialog.open(EmailComponent, {
      enterAnimationDuration: '1s',
      exitAnimationDuration: '1s',
      width: 'auto',
      panelClass: 'dialogClass',
      backdropClass: 'dialogBackdrop',
    });
  }

  /**
   *Generate 4 unique skills to display on the main
   */
  reArrangeSkills(): void {
    this.displaySkills = []; // empty the array first
    for (let i = 0; i < 4; i++) {
      let randomN = Math.floor(
        Math.random() * (this.userSkills.length - 0 + 1) + 0
      );

      let randomSkill: Skill = this.userSkills[randomN];
      // Check if skill is already in an array and generate a new one if true
      if (this.displaySkills.some((skill) => skill === randomSkill)) {
        i--;
      } else {
        this.displaySkills.push(randomSkill);
      }
      this.numbers.push(randomN);
    }
  }
}
