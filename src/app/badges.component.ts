import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  template: `
    <div>
      <span matBadge="1">Notifications</span>
    </div>

    <div>
      <span matBadge="2" matBadgePosition="below before">Notifications</span>
    </div>

    <div>
      <span matBadge="3" matBadgePosition="below after">Notifications</span>
    </div>

    <div>
      <span matBadge="4" matBadgePosition="above before">Notifications</span>
    </div>

    <div>
      <span matBadge="5" matBadgeSize="small">Notifications</span>
    </div>

    <div>
      <span matBadge="6" matBadgeSize="medium">Notifications</span>
    </div>

    <div>
      <span matBadge="7" matBadgeSize="large">Notifications</span>
    </div>

    <div>
      <span matBadge="8" matBadgeColor="primary">Notifications</span>
    </div>

    <div>
      <span matBadge="9" matBadgeColor="accent">Notifications</span>
    </div>

    <div>
      <span matBadge="10" matBadgeColor="warn">Notifications</span>
    </div>

    <div>
      <span matBadge="11" matBadgeOverlap="false">Notifications</span>
    </div>

    <div>
      <mat-icon matBadge="12">grade</mat-icon>
    </div>

    <div>
      <span matBadge="{{ notifications1 }}">Notifications</span>
    </div>

    <div>
      <span matBadge="{{ notifications2 }}" [matBadgeHidden]="notifications2 === 0">Notifications</span>
    </div>
  `,
  styles: [`
    div {
      margin: 3rem;
    }
  `]
})
export class BadgesComponent implements OnInit {
  notifications1 = 22;
  notifications2 = 0;

  constructor() { }

  ngOnInit() {
  }

}
