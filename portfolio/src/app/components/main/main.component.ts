import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/Models';
import { SocialsComponent } from '../socials/socials.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule,SocialsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  constructor(private dialog: MatDialog, private aboutServ: AboutService) {}
  about!: About 

  ngOnInit(): void {
    this.aboutServ.setUserAbout();
    this.aboutServ.getUserAbout().subscribe((resp: About) => {
      this.about = resp;
    });
  }

  openEmailDialog(): void {
    this.dialog.open(EmailComponent, {
      enterAnimationDuration: '1s',
      exitAnimationDuration: '1s',
      width: 'auto',
      panelClass: 'dialogClass',
      backdropClass: 'dialogBackdrop',
    });
  }
}
