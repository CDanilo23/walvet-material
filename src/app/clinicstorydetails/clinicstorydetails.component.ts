import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClinicstoryService } from '../service/clinicstory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinicstory } from '../clinicstory/clinicstory';


@Component({
  selector: 'app-clinicstorydetails',
  templateUrl: './clinicstorydetails.component.html',
  styleUrls: ['./clinicstorydetails.component.scss']
})
export class ClinicstorydetailsComponent implements OnInit, OnDestroy {

  clinicstory: Clinicstory;
  private sub: any;
  id: Number;
  constructor(private clinicstoryservice: ClinicstoryService,
              private activatedroute: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
    this.sub = this.activatedroute.params.subscribe(params => {
      this.id = params['id'];
      this.clinicstoryservice.findById(this.id).subscribe(p => this.clinicstory = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
