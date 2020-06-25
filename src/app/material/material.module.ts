import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
