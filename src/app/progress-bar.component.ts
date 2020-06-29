import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <h1>Progress bar configuration</h1>

    <h2 class="example-h2">Color</h2>
    <div class="example-section">
      <mat-progress-bar
        class="example-margin"
        color="primary">
      </mat-progress-bar>
      <mat-progress-bar
        class="example-margin"
        color="accent">
      </mat-progress-bar>
      <mat-progress-bar
        class="example-margin"
        color="warn">
      </mat-progress-bar>
    </div>

    <h2 class="example-h2">Mode</h2>
    <div class="example-section">
      <mat-progress-bar
        class="example-margin"
        mode="determinate"
        value="20">
      </mat-progress-bar>
      <mat-progress-bar
        class="example-margin"
        mode="indeterminate">
      </mat-progress-bar>
      <mat-progress-bar
        class="example-margin"
        mode="buffer"
        value="50"
        bufferValue="60">
      </mat-progress-bar>
      <mat-progress-bar
        class="example-margin"
        mode="query">
      </mat-progress-bar>
    </div>
  `,
  styles: [`
    .example-h2 {
      margin: 10px;
    }

    .example-section {
      display: flex;
      align-content: center;
      align-items: center;
      height: 60px;
    }

    .example-margin {
      margin: 0 10px;
    }
  `]
})
export class ProgressBarComponent {
}
