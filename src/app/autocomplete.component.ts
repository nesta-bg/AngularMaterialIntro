import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  template: `
    <form>
      <mat-form-field>
        <input type="text" matInput [matAutocomplete]="auto1" />
        <mat-autocomplete #auto1="matAutocomplete">
          <mat-option *ngFor="let option of options" [value]="option">
            {{ option }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>

    <br/><br/>

    <form>
      <mat-form-field>
        <input type="text" matInput [matAutocomplete]="auto2" />
        <mat-autocomplete #auto2="matAutocomplete" [displayWith]="displayFn">
          <mat-option *ngFor="let option of objectOptions" [value]="option">
            {{ option.name }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>

    <br/><br/>

    <form>
      <mat-form-field>
        <input type="text" matInput [matAutocomplete]="auto3" [formControl]="myControl"/>
        <mat-autocomplete #auto3="matAutocomplete" >
          <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
  styles: [`
    form {
      background-color: grey;
    }
  `]
})
export class AutocompleteComponent implements OnInit {
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' }
  ];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  displayFn(subject) {
    return subject ? subject.name : undefined;
  }

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(options => options.toLowerCase().includes(filterValue));
  }

}
