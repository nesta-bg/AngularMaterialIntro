import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <div>
      <button mat-button>Click me!</button>
      <button mat-raised-button>Click me!</button>
      <button mat-flat-button>Click me!</button>
      <button mat-stroked-button>Click me!</button>
    </div>

    <div>
      <button mat-icon-button>Icon</button>
      <button mat-fab>Fab</button>
      <button mat-mini-fab>Minifab</button>
    </div>

    <div>
      <button color="primary" mat-button>Primary</button>
      <button color="accent" mat-button>Accent</button>
      <button color="warn" mat-button>Warn</button>
    </div>

    <div>
      <button color="primary" mat-raised-button>Primary</button>
      <button color="accent" mat-raised-button>Accent</button>
      <button color="warn" disableRipple mat-raised-button>Warn</button>
    </div>
  `,
  styles: [`
    button {
      margin-right: 3rem;
    }
  `]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
