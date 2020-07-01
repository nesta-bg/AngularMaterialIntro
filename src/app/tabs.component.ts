import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <mat-tab-group #tabRef (selectedTabChange)="logChange(tabRef.selectedIndex)">
      <mat-tab label="Angular"> Angular Content </mat-tab>
      <mat-tab label="React"> React Content </mat-tab>
      <mat-tab label="Vue"> Vue Content </mat-tab>
    </mat-tab-group>
    {{ tabRef.selectedIndex }}
  `,
  styles: [`
    :host ::ng-deep .mat-tab-header {
      border-bottom: 2px solid gray;
    }
    :host ::ng-deep .mat-tab-label {
      color: black;
    }
    :host ::ng-deep .mat-tab-label-active {
      color: orange;
    }
  `]
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logChange(index) {
    console.log(index);
  }

}
