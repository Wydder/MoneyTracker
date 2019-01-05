import { TestBed } from '@angular/core/testing';

import { ExpenseapiService } from './expenseapi.service';

describe('ExpenseapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseapiService = TestBed.get(ExpenseapiService);
    expect(service).toBeTruthy();
  });
});
