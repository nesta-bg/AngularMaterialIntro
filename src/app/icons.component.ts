import { Component, OnInit } from '@angular/core';

// https://material.io/resources/icons/?style=baseline

@Component({
  selector: 'app-icons',
  template: `
    <div>
      <mat-icon color="primary">grade</mat-icon>
    </div>
  `,
  styles: []
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
