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
import { SidenavComponent } from './sidenav.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { ListComponent } from './list.component';
import { GridListComponent } from './grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { CardComponent } from './card.component';

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
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
