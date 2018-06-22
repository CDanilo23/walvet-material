import {Component, OnInit, ViewChild} from '@angular/core';
import {Clinicstory} from './clinicstory';
import {ClinicstoryService} from '../service/clinicstory.service';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { FormControl } from '@angular/forms';
import { Moment } from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'dd/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  moduleId: 'clinicstory',
  selector: 'app-clinicstory',
  templateUrl: './clinicstory.component.html',
  styleUrls: ['./clinicstory.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class ClinicstoryComponent implements OnInit {
  date = new FormControl(_moment());
  born_date = new FormControl(_moment());
  currentClinic = new Clinicstory();
  constructor(private clinicstoryService: ClinicstoryService) { }

  ngOnInit() {
  }

  saveValues(): void {
      this.currentClinic.fecha = this.date.value;
      console.log('converted ' +  this.currentClinic.fecha);
      this.currentClinic.born_date = this.born_date.value;
      console.log('converted ' + this.currentClinic.born_date);
  }
 }

