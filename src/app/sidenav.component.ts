import { Component } from '@angular/core';

// <mat-sidenav mode="over"> - default
// <mat-sidenav mode="push">
// <mat-sidenav mode="side">

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav (opened)="log('Opened')" (closed)="log('Closed')" mode="side" [(opened)]="opened">Sidenav</mat-sidenav>
      <mat-sidenav-content>Main
        <button (click)="opened=!opened">Toggle Opened</button>
        <button (click)="sidenav.open()">Open</button>
        <button (click)="sidenav.close()">Close</button>
        <button (click)="sidenav.toggle()">Toggle</button>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      height: 100%;
    }
    mat-sidenav, mat-sidenav-content {
      padding: 16px;
    }
    mat-sidenav {
      background-color: lightcoral;
      width: 200px;
    }
  `]
})
export class SidenavComponent {
  opened = false;

  log(state) {
    console.log(state);
  }
}
