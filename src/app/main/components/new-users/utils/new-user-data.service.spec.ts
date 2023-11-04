import { TestBed } from '@angular/core/testing';

import { NewUserDataService } from './new-user-data.service';

describe('NewUserDataService', () => {
  let service: NewUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
