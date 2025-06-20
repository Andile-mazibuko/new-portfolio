import { Component } from '@angular/core';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [EmailComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

}
