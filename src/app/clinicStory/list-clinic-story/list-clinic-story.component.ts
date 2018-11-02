import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { Clinicstory } from '../clinicstory';
import { ClinicstoryService } from '../../service/clinicstory.service';
import { Router } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-clinic-story',
  templateUrl: './list-clinic-story.component.html',
  styleUrls: ['./list-clinic-story.component.scss']
})
export class ListClinicStoryComponent implements OnInit {

  myControl = new FormControl();

  stories: Clinicstory[] = [];
  story: Clinicstory;

  dataSource = null;

  constructor(private clinicstoryService: ClinicstoryService, private router: Router) { }

  ngOnInit() {
    console.log('entro');
    /*  this.clinicstoryService.findAll().subscribe((data: Clinicstory)  => {
      this.story = data;
    });*/
    this.clinicstoryService.findAll();
  }
}
