import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  template: `
    <div>
      <mat-progress-spinner value="0"></mat-progress-spinner>
    </div>

    <div>
      <mat-progress-spinner value="40"></mat-progress-spinner>
    </div>

    <div>
      <mat-progress-spinner value="100"></mat-progress-spinner>
    </div>

    <div>
      <mat-spinner *ngIf="showSpinner" color="accent"></mat-spinner>
      <button (click)="loadData()">Load Data</button>
    </div>
  `,
  styles: []
})
export class ProgressSpinnerComponent implements OnInit {
  showSpinner = false;

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

}
