import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field>
      <mat-label>Topic</mat-label>
      <mat-select [(value)]="selectedValue1">
        <mat-option>None</mat-option>
        <mat-option value="angular">Angular</mat-option>
        <mat-option value="react">React</mat-option>
        <mat-option value="vue">Vue</mat-option>
      </mat-select>
    </mat-form-field>
    {{ selectedValue1 }}

    <br/><br/>

    <mat-form-field>
      <mat-label>Topic</mat-label>
      <mat-select [(value)]="selectedValue2" multiple>
        <mat-option>None</mat-option>
        <mat-optgroup label="Web">
          <mat-option value="angular">Angular</mat-option>
          <mat-option value="react">React</mat-option>
          <mat-option value="vue">Vue</mat-option>
        </mat-optgroup>
        <mat-optgroup label="Mobile">
          <mat-option value="ionic">Ionic</mat-option>
          <mat-option value="reactnative">React Native</mat-option>
        </mat-optgroup>
      </mat-select>
    </mat-form-field>
    {{ selectedValue2 }}
  `,
  styles: [`
    .mat-form-field {
      background-color: grey;
    }
  `]
})
export class SelectComponent implements OnInit {
  selectedValue1: string;
  selectedValue2: string;
  constructor() { }

  ngOnInit() {
  }

}
