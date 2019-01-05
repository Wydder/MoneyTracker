import { TestBed } from '@angular/core/testing';

import { IncomeapiService } from './incomeapi.service';

describe('IncomeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomeapiService = TestBed.get(IncomeapiService);
    expect(service).toBeTruthy();
  });
});
