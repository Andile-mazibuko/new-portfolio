import { Component, OnInit } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/Models';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [EmailComponent,SocialsComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private aboutServ: AboutService) {}
  about!: About;

  ngOnInit(): void {
    this.aboutServ.setUserAbout(); //Just in case someone uses the search-bar to access this route

    this.aboutServ.getUserAbout().subscribe((resp: About) => {
      this.about = resp;
      //console.log(this.about);
    });
  }
}
