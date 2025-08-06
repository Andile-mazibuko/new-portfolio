import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';
import { AboutService } from '../../services/about.service';
import { About, Skill } from '../../models/Models';
import { SocialsComponent } from '../socials/socials.component';
import { interval } from 'rxjs';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, SocialsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  constructor(private dialog: MatDialog, private aboutServ: AboutService,private ngZone: NgZone,private changeDetector: ChangeDetectorRef) {}
  about!: About;
  userSkills: Skill[] = [];
  displaySkills: Skill[] = [];
  numbers: number[] = [];
  intervalId: any;

  ngOnInit(): void {
    this.aboutServ.setUserAbout();
    this.aboutServ.getUserAbout().subscribe((resp: About) => {
      this.about = resp;
    });
    this.aboutServ.getSkills().subscribe((resp: Skill[]) => {
      this.userSkills = resp;
      this.reArrangeSkills();
      //this.loopSkillsRearrangements()
    });

    this.ngZone.runOutsideAngular(() =>{
      this.intervalId = setInterval(() => {
      
        this.reArrangeSkills();
        //console.log(this.displaySkills)
        this.changeDetector.detectChanges() // Detect changes and update the array on html side
    }, 5000);
    });
  }
  ngOnDestroy(): void {
     if (this.intervalId) {
      clearInterval(this.intervalId);
    }
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
    this.displaySkills = [] // empty the array first
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
