import { TestBed } from '@angular/core/testing';

import { EnhancedData } from './enhanced-data.service';

describe('EnhancedData', () => {
  let service: EnhancedData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnhancedData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
