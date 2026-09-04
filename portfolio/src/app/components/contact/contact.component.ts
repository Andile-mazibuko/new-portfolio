import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/Models';
import { SocialsComponent } from '../socials/socials.component';
import { FooterComponent } from "../footer/footer.component";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [EmailComponent, SocialsComponent, FooterComponent,MatIconModule,MatDividerModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild(EmailComponent) child!: EmailComponent;
  isDisabledVal = true

  constructor(private aboutServ: AboutService) {}
  about!: About;

  ngOnInit(): void {
   
    this.aboutServ.setUserAbout(); //Just in case someone uses the search-bar to access this route

    this.aboutServ.getUserAbout().subscribe((resp: About) => {
      this.about = resp;
    });
  }
  
}
