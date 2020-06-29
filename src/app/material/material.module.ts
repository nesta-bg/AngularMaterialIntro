import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
