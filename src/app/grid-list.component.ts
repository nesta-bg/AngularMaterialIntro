import { Component, OnInit } from '@angular/core';

// rowHeight="100px"
// rowHeight="2:1"

@Component({
  selector: 'app-grid-list',
  template: `
    <mat-grid-list cols="8" rowHeight="fit" style="height: 200px" gutterSize="10px">
      <mat-grid-tile rowspan="2">Tile 1</mat-grid-tile>
      <mat-grid-tile colspan="4">Tile 2</mat-grid-tile>
      <mat-grid-tile>Tile 3</mat-grid-tile>
      <mat-grid-tile>Tile 4</mat-grid-tile>
      <mat-grid-tile>Tile 5</mat-grid-tile>
      <mat-grid-tile>Tile 6</mat-grid-tile>
      <mat-grid-tile>Tile 7</mat-grid-tile>
      <mat-grid-tile>Tile 8</mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [`
    mat-grid-tile {
      background-color: lightblue;
    }
  `]
})
export class GridListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
