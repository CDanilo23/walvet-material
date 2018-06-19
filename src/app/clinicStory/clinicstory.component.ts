import { Component, OnInit } from '@angular/core';
import { Clinicstory } from './clinicstory';
import { ClinicstoryService } from '../service/clinicstory.service';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  moduleId: 'clinicstory',
  selector: 'app-clinicstory',
  templateUrl: './clinicstory.component.html',
  styleUrls: ['./clinicstory.component.scss']
})
export class ClinicstoryComponent implements OnInit {

  currentClinic = new Clinicstory();

  constructor(private clinicstoryService: ClinicstoryService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:one-line
  saveValues(){
      console.log(this.currentClinic.name);
      console.log(this.currentClinic.specie);
      console.log(this.currentClinic.fecha);
  }

  public onDate(event): void {
    this.currentClinic.fecha = event;
    console.log(this.currentClinic.fecha);
  }

}

