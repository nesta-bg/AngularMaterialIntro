import { Component, OnInit } from '@angular/core';

// <div *ngFor="let number of numbers" class="number">
//   {{ number }}
// </div>

@Component({
  selector: 'app-virtual-scrolling',
  template: `
    <cdk-virtual-scroll-viewport itemSize="100" class="container" >
      <div *cdkVirtualFor="let number of numbers" class="number" >
        {{ number }}
      </div>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [`
    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid maroon;
      box-sizing: border-box;
      height: 100px;
    }

    .container {
      height: 400px;
    }
  `]
})
export class VirtualScrollingComponent implements OnInit {
  numbers = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit() {
  }

}
