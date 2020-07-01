import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <mat-list>
      <mat-list-item>Item 1</mat-list-item>
      <mat-list-item>Item 2</mat-list-item>
      <mat-list-item>Item 3</mat-list-item>
    </mat-list>

    <mat-list dense>
      <mat-list-item>Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1</mat-list-item>
      <mat-list-item>Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2</mat-list-item>
      <mat-list-item>Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3</mat-list-item>
    </mat-list>

    <mat-nav-list>
      <a mat-list-item href="#"> Home </a>
      <a mat-list-item href="#"> About </a>
      <a mat-list-item href="#"> Services </a>
    </mat-nav-list>

    <mat-list>
      <mat-list-item>
        <mat-icon matListIcon>home</mat-icon>
        <h3 matLine>Heading</h3>
        <p matLine>Line</p>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <mat-icon matListIcon>folder</mat-icon>
        <h3 matLine>Heading 2</h3>
        <p matLine>Line 2</p>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    .mat-list-item {
      color: black;
    }
    .mat-divider {
      border-top-color: brown;
    }
  `]
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
