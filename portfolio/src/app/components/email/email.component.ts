import {
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  PLATFORM_ID,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss',
})
export class EmailComponent implements OnInit {
  @Input() isDisabled = false;
  formGroup!: FormGroup;
  emailjskeys = environment.emailjs;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    @Optional() private dialogRef: MatDialogRef<EmailComponent>,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: [''],
      message: ['', Validators.required],
    });
    if (this.isDisabled && isPlatformBrowser(this.platformId)) {
      document.getElementById('close-form')?.classList.add('no-display');
    }
  }

  closeForm(): void {
    this.dialogRef.close();
  }

  sendEmail(): void {

    // do not allow sending email if the form is not valid
    if (this.formGroup.invalid) {
      this.snackBar.open('Please fill in all required fields.', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    // send email using emailjs if the form is valid
    emailjs.send(
      this.emailjskeys.serviceId, 
      this.emailjskeys.templateId, 
      {
        name: this.formGroup.value.name,
        from: this.formGroup.value.email,
        subject: this.formGroup.value.subject,
        message: this.formGroup.value.message,
      }
      , this.emailjskeys.publicKey
    ).then((response) => {
      
      this.snackBar.open('Email sent successfully!', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
      this.formGroup.reset();
      this.closeForm();
    }, (error) => {
      this.snackBar.open('Failed to send email. Please try again later.', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    });
  }
}
