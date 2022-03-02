import { TestBed } from '@angular/core/testing';

import { ApiseriviceService } from './apiserivice.service';

describe('ApiseriviceService', () => {
  let service: ApiseriviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiseriviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
