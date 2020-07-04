import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-date-picker',
  template: `
    <mat-form-field>
      <input matInput [matDatepicker]="myDatePicker">
      <mat-datepicker-toggle matSuffix [for]="myDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #myDatePicker></mat-datepicker>
    </mat-form-field>

    <br/><br/>

    <mat-form-field>
      <input matInput [matDatepicker]="myDatePicker1">
      <mat-datepicker-toggle matSuffix [for]="myDatePicker1"></mat-datepicker-toggle>
      <mat-datepicker #myDatePicker1 startView="year"></mat-datepicker>
    </mat-form-field>

    <br/><br/>

    <mat-form-field>
      <input matInput [matDatepicker]="myDatePicker2">
      <mat-datepicker-toggle matSuffix [for]="myDatePicker2"></mat-datepicker-toggle>
      <mat-datepicker #myDatePicker2 startView="multi-year"></mat-datepicker>
    </mat-form-field>

    <br/><br/>

    <mat-form-field>
      <input matInput [matDatepicker]="myDatePicker3" [min]="minDate" [max]="maxDate">
      <mat-datepicker-toggle matSuffix [for]="myDatePicker3"></mat-datepicker-toggle>
      <mat-datepicker #myDatePicker3></mat-datepicker>
    </mat-form-field>

    <br/><br/>

    <mat-form-field>
      <input matInput [matDatepicker]="myDatePicker4" [matDatepickerFilter]="dateFilter">
      <mat-datepicker-toggle matSuffix [for]="myDatePicker4"></mat-datepicker-toggle>
      <mat-datepicker #myDatePicker4></mat-datepicker>
    </mat-form-field>
  `,
  styles: [`
    .mat-form-field {
      background-color: grey;
    }
  `]
})
export class DatePickerComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2020, 9, 21);

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit() {
  }

}

