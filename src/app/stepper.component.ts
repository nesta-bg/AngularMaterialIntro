import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  template: `
    <mat-horizontal-stepper linear>
      <mat-step label="Shipping Address" completed=true>
        <p>Shipping Address Details</p>
      </mat-step>
      <mat-step label="Billing Address" completed=false optional>
        <p>Billing Address Details</p>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </mat-step>
      <mat-step label="Place Order" completed=false>
        <p>Place Order Details</p>
      </mat-step>
    </mat-horizontal-stepper>

    <br/>

    <mat-vertical-stepper linear>
      <mat-step label="Shipping Address" completed=true>
        <p>Shipping Address Details</p>
      </mat-step>
      <mat-step label="Billing Address" completed=false optional>
        <p>Billing Address Details</p>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </mat-step>
      <mat-step label="Place Order" completed=false>
        <p>Place Order Details</p>
      </mat-step>
    </mat-vertical-stepper>
  `,
  styles: []
})
export class StepperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
