import { Component, OnInit } from '@angular/core';

// floatLabel="never"
// floatLabel="always"

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field floatLabel="auto" hideRequiredMarker appearance="legacy">
      <mat-label class="b">Name</mat-label>
      <input matInput required>
      <mat-hint align="end">Min 5 characters</mat-hint>
    </mat-form-field>

    <br/><br/>

    <mat-form-field floatLabel="auto" hideRequiredMarker appearance="standard">
      <mat-label class="b">Name</mat-label>
      <input matInput required>
      <mat-hint align="end">Min 5 characters</mat-hint>
    </mat-form-field>

    <br/><br/>

    <mat-form-field floatLabel="auto" hideRequiredMarker appearance="fill" color="accent">
      <mat-label class="b">Name</mat-label>
      <input matInput required>
      <mat-hint align="end">Min 5 characters</mat-hint>
    </mat-form-field>

    <br/><br/>

    <mat-form-field floatLabel="auto" hideRequiredMarker appearance="outline" color="warn">
      <mat-label class="b">Name</mat-label>
      <input matInput required>
      <mat-hint align="end">Min 5 characters</mat-hint>
    </mat-form-field>
  `,
  styles: [`
    .mat-form-field {
      background-color: grey;
    }
  `]
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
