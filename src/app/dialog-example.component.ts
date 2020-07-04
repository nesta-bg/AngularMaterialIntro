import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-example',
  template: `
    <h2 mat-dialog-title>Session Timeout</h2>
    <mat-dialog-content>Hi {{ data.name }}. You will be logged out due to inactivity!</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close mat-dialog-close="true">Keep me logged in</button>
      <button mat-button mat-dialog-close mat-dialog-close="false">Log out</button>
    <mat-dialog-actions>
  `,
  styles: []
})
export class DialogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
