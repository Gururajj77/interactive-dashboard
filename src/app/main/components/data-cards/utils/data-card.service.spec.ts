import { TestBed } from '@angular/core/testing';

import { DataCardService } from './data-card.service';

describe('DataCardService', () => {
  let service: DataCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
