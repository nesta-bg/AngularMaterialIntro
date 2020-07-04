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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { ListComponent } from './list.component';
import { GridListComponent } from './grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { CardComponent } from './card.component';
import { TabsComponent } from './tabs.component';
import { StepperComponent } from './stepper.component';
import { InputComponent } from './input.component';
import { SelectComponent } from './select.component';
import { AutocompleteComponent } from './autocomplete.component';
import { CheckboxComponent } from './checkbox.component';
import { RadioButtonComponent } from './radio-button.component';
import { DatePickerComponent } from './date-picker.component';
import { TooltipComponent } from './tooltip.component';
import { SnackbarComponent, CustomSnackbarComponent } from './snackbar.component';
import { DialogComponent } from './dialog.component';
import { DialogExampleComponent } from './dialog-example.component';

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
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxComponent,
    RadioButtonComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    CustomSnackbarComponent,
    DialogComponent,
    DialogExampleComponent
  ],
  entryComponents: [CustomSnackbarComponent, DialogExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
