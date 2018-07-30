import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicstorydetailsComponent } from './clinicstorydetails.component';

describe('ClinicstorydetailsComponent', () => {
  let component: ClinicstorydetailsComponent;
  let fixture: ComponentFixture<ClinicstorydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicstorydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicstorydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
