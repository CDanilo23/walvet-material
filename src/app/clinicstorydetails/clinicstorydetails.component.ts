import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ClinicstoryService } from '../service/clinicstory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinicstory } from '../clinicstory/clinicstory';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormControl} from '@angular/forms';
import { MY_FORMATS } from '../constants/DateFormats';
import * as _moment from 'moment';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';



@Component({
  selector: 'app-clinicstorydetails',
  templateUrl: './clinicstorydetails.component.html',
  styleUrls: ['./clinicstorydetails.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class ClinicstorydetailsComponent implements OnInit, OnDestroy {

  date = new FormControl(_moment());
  born_date = new FormControl(_moment());
  story: Clinicstory;
  private sub: any;
  id: Number;
  MY_FORMATS;
  enableAllInputs: boolean;



  constructor(private clinicstoryservice: ClinicstoryService,
              private activatedroute: ActivatedRoute,
              private route: Router) {
                this.enableAllInputs = true;
               }

  ngOnInit() {

    this.sub = this.activatedroute.params.subscribe(params => {
      this.id = params['id'];
      this.clinicstoryservice.findById(this.id).subscribe(p => this.story = p);
    });
  }


  enableInputs() {
    this.enableAllInputs = false;
    console.log('----------entro---------');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  editValues(): void {
    this.story.fecha = this.date.value;
    console.log('converted ' +  this.story.fecha);
    this.story.born_date = this.born_date.value;
    console.log('converted ' + this.story.born_date);
  }

}
