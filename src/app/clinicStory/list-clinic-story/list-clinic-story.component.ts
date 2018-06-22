import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { Clinicstory } from '../clinicstory';

@Component({
  selector: 'app-list-clinic-story',
  templateUrl: './list-clinic-story.component.html',
  styleUrls: ['./list-clinic-story.component.scss']
})
export class ListClinicStoryComponent implements OnInit {

  stories: Clinicstory[] = [];

  constructor() { }

  ngOnInit() {
  }

}
