import { TestBed } from '@angular/core/testing';

import { BinOsmService } from './bin-osm.service';

describe('BinOsmService', () => {
  let service: BinOsmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinOsmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
