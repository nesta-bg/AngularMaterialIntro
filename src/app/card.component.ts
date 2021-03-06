import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <mat-card>
      Basic card
    </mat-card>

    <br/>

    <mat-card>
      <mat-card-title>
        Card title
      </mat-card-title>
      <mat-card-content>
        This is the card content
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-flat-button color="warn">Login</button>
      </mat-card-actions>
    </mat-card>

    <br/>

    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
  </mat-card>
  `,
  styles: [`
    .example-card {
      max-width: 400px;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
