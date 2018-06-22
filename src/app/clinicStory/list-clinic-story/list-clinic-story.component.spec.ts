import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClinicStoryComponent } from './list-clinic-story.component';

describe('ListClinicStoryComponent', () => {
  let component: ListClinicStoryComponent;
  let fixture: ComponentFixture<ListClinicStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClinicStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClinicStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
