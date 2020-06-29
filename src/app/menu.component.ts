import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <mat-menu #appMenu="matMenu" xPosition="after" yPosition="above">
        <button mat-menu-item [matMenuTriggerFor]="subMenu">FrontEnd</button>
        <button mat-menu-item>BackEnd</button>
      </mat-menu>

      <button class="center" mat-flat-button [matMenuTriggerFor]="appMenu">Menu</button>
    </div>

    <div>
      <mat-menu #subMenu="matMenu">
        <button mat-menu-item>Angular</button>
        <button mat-menu-item>React</button>
        <button mat-menu-item>Vue</button>
      </mat-menu>
    </div>

    <div>
      <mat-menu #lazyMenu="matMenu">
        <ng-template matMenuContent let-name="name" let-hobby="hobby">
          <button mat-menu-item>Settings</button>
          <button mat-menu-item>Hobby is {{ hobby }}</button>
          <button mat-menu-item>Log out {{ name }}</button>
        </ng-template>
      </mat-menu>

      <button [matMenuTriggerData]="{name: 'Vishwas', hobby: 'football'}" [matMenuTriggerFor]="lazyMenu">Vishwas</button>
      <button [matMenuTriggerData]="{name: 'Codevolution', hobby: 'teaching'}" [matMenuTriggerFor]="lazyMenu">Codevolution</button>
    </div>
  `,
  styles: [`
    div {
      margin: 2rem;
    }
    .center {
      margin: 10rem;
    }
  `]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
