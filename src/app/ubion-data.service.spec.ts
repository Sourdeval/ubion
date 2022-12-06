import { TestBed } from '@angular/core/testing';

import { UbionDataService } from './ubion-data.service';

describe('UbionDataService', () => {
  let service: UbionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
