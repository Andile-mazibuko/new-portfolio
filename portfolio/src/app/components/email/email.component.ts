import { Component, Inject, Input, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Email } from '../../models/Models';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

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
  //email?: Email;
   @Input() isDisabled = false
  formGroup!: FormGroup;
  //isVisible!: boolean ; // close button

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    @Optional() private dialogRef: MatDialogRef<EmailComponent>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
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
    this.snackBar.open('Email sent ', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
    this.formGroup.reset();
  }
}
