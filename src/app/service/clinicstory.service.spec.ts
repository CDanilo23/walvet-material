/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClinicstoryService } from './clinicstory.service';

describe('ClinicstoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicstoryService]
    });
  });

  it('should ...', inject([ClinicstoryService], (service: ClinicstoryService) => {
    expect(service).toBeTruthy();
  }));
});
