import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div>
      <mat-toolbar color="warn">
        <span>Angular Material</span>
      </mat-toolbar>
    </div>
    <div>
    <mat-toolbar color="primary" class="navbar">
      <div>Angular Material</div>
      <div>
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
      </div>
    </mat-toolbar>
  </div>
  `,
  styles: [`
    .navbar {
      justify-content: space-between;
    }

    span {
      padding-right: 1rem;
    }
  `]
})
export class NavbarComponent {

}
