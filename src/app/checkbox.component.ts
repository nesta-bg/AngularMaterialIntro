import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `
    <mat-checkbox>
      Subscribe
    </mat-checkbox>

    <br/>

    <mat-checkbox labelPosition="before">
      Subscribe
    </mat-checkbox>

    <br/>

    <mat-checkbox color="primary">
      Subscribe
    </mat-checkbox>

    <br/>

    <mat-checkbox color="warn">
      Subscribe
    </mat-checkbox>
  `,
  styles: [`
    .mat-checkbox {
      background-color: grey;
    }
  `]
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
