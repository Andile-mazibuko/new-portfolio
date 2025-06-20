import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private dialog: MatDialog) {}
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
