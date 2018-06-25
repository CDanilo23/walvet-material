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

@Component({
  selector: 'app-list-clinic-story',
  templateUrl: './list-clinic-story.component.html',
  styleUrls: ['./list-clinic-story.component.scss']
})
export class ListClinicStoryComponent implements OnInit {

  stories: Clinicstory[] = [];

  constructor(private clinicstoryService: ClinicstoryService, private router: Router) { }

  ngOnInit() {
    console.log('entro');
    return this.clinicstoryService.findAll().subscribe(p => {
      this.stories = p 
    });
  }

}
