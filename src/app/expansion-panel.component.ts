import { Component, OnInit } from '@angular/core';

// <mat-accordion multi=true>
// <mat-accordion hideToggle>

@Component({
  selector: 'app-expansion-panel',
  template: `
    <mat-accordion>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Angular Fundamentals
          </mat-panel-title>
          <mat-panel-description>
            Total Duration : 3 hours
          </mat-panel-description>
        </mat-expansion-panel-header>
        <p>This is the panel content. Add course details.</p>
        <mat-action-row>
          <button mat-button>Enroll</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Angular Material
          </mat-panel-title>
          <mat-panel-description>
            Total Duration : 4 hours
          </mat-panel-description>
        </mat-expansion-panel-header>
        <p>This is the panel content. Add course details.</p>
        <mat-action-row>
          <button mat-button>Enroll</button>
        </mat-action-row>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: []
})
export class ExpansionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
