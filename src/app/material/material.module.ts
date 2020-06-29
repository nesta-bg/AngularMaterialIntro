import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatToolbarModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
