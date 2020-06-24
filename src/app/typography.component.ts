import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  template: `
    <div class="mat-display-4">This is display 4</div>
    <div class="mat-display-3">This is display 3</div>
    <div class="mat-display-2">This is display 2</div>
    <div class="mat-display-1">This is display 1</div>

    <div class="mat-headline">This is heading for h1</div>
    <div class="mat-title">This is heading for h2</div>
    <div class="mat-subheading-2">This is heading for h3</div>
    <div class="mat-subheading-1">This is heading for h4</div>

    <div class="mat-body-1">This is body text</div>
    <div class="mat-body-2">This is bold body text</div>
    <div class="mat-caption">This is caption text</div>

    <div class="mat-typography">
        <h1>This is heading for h1</h1>
        <h2>This is heading for h2</h2>
        <h3>This is heading for h3</h3>
        <h4>This is heading for h4</h4>
    </div>
  `,
  styles: []
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
