import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography.component';
import { ButtonsComponent } from './buttons.component';
import { ButtonsToggleComponent } from './buttons-toggle.component';
import { IconsComponent } from './icons.component';
import { BadgesComponent } from './badges.component';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { ProgressBarComponent } from './progress-bar.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonsToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
