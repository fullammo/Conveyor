/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MomentService } from './Moment.service';

describe('Service: Moment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MomentService]
    });
  });

  it('should ...', inject([MomentService], (service: MomentService) => {
    expect(service).toBeTruthy();
  }));
});
