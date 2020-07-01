import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule,
  MatDividerModule, MatGridListModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
