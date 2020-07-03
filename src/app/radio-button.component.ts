import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  template: `
    <mat-radio-group>
      <mat-radio-button value="angular" color="primary">Angular</mat-radio-button>
      <mat-radio-button value="react" color="accent">React</mat-radio-button>
      <mat-radio-button value="vue" color="warn">Vue</mat-radio-button>
    </mat-radio-group>
  `,
  styles: [`
    .mat-radio-group {
      background-color: grey;
    }
  `]
})
export class RadioButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
