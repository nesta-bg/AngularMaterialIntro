import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-toggle',
  template: `
    <div>
      <mat-button-toggle #toggleBtn1>Toggle</mat-button-toggle>
      {{ toggleBtn1.checked }}
      <mat-button-toggle #toggleBtn2 checked>Toggle Checked</mat-button-toggle>
      {{ toggleBtn2.checked }}
      <mat-button-toggle checked disableRipple>Toggle DisableRipple</mat-button-toggle>
      <mat-button-toggle checked disabled>Toggle Disabled</mat-button-toggle>
    </div>

    <div>
      <mat-button-toggle-group #toggleGroup1="matButtonToggleGroup">
        <mat-button-toggle value="angular">Angular</mat-button-toggle>
        <mat-button-toggle value="react">React</mat-button-toggle>
        <mat-button-toggle value="vue">Vue</mat-button-toggle>
      </mat-button-toggle-group>
      {{ toggleGroup1.value }}
    </div>

    <div>
      <mat-button-toggle-group #toggleGroup2="matButtonToggleGroup" multiple>
        <mat-button-toggle value="angular">Angular</mat-button-toggle>
        <mat-button-toggle value="react">React</mat-button-toggle>
        <mat-button-toggle value="vue">Vue</mat-button-toggle>
      </mat-button-toggle-group>
      {{ toggleGroup2.value }}
    </div>
  `,
  styles: []
})
export class ButtonsToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
