import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from './dialog-example.component';

@Component({
  selector: 'app-dialog',
  template: `
    <button mat-raised-button (click)="openDialog()">Open Dialog</button>
  `,
  styles: []
})
export class DialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Nenad'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
