import { TestBed } from '@angular/core/testing';

import { ExpirienceService } from './expirience.service';

describe('ExpirienceService', () => {
  let service: ExpirienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpirienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
