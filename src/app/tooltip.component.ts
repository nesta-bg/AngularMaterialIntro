import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <button
      mat-raised-button
      matTooltip="Welcome to Angular Material"
    >
      Hello
    </button>

    <br/><br/>

    <button
      class="m"
      mat-raised-button
      matTooltip="Welcome to Angular Material"
      matTooltipPosition="before"
    >
      Hello
    </button>

    <br/><br/>

    <button
      mat-raised-button
      matTooltip="Welcome to Angular Material"
      matTooltipPosition="after"
    >
      Hello
    </button>

    <br/><br/>

    <button
      mat-raised-button
      matTooltip="Welcome to Angular Material"
      matTooltipPosition="above"
    >
      Hello
    </button>

    <br/><br/>

    <button
      mat-raised-button
      matTooltip="Welcome to Angular Material"
      matTooltipPosition="below"
    >
      Hello
    </button>

    <br/><br/>

    <button
      mat-raised-button
      matTooltip="Welcome to Angular Material"
      matTooltipShowDelay="2000"
      matTooltipHideDelay="2000"
    >
      Hello
    </button>
  `,
  styles: [`
    .m {
      margin-left: 20rem;
    }
  `]
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
