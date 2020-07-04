import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  template: `
    <button mat-button (click)="openSnackBar('Item deleted')">
      Show snack-bar
    </button>

    <br/><br/>

    <button mat-button (click)="openSnackBar('Item deleted', 'Undo')">
      Delete
    </button>

    <br/><br/>

    <button mat-button (click)="openCustomSnackBar()">
      Show custom snackBar
    </button>
  `,
  styles: []
})
export class SnackbarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message, action) {
    const snackBarRef = this.snackBar.open(message, action, {duration: 2000 });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
    });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });
  }

  openCustomSnackBar() {
    // tslint:disable-next-line: no-use-before-declare
    this.snackBar.openFromComponent(CustomSnackbarComponent, {duration: 2000});
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-custom-snackbar',
  template: `<span style='color: orange'>Custom Snackbar</span>`
})
export class CustomSnackbarComponent {}

