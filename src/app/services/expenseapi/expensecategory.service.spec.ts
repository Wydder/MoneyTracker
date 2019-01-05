import { TestBed } from '@angular/core/testing';

import { ExpensecategoryService } from './expensecategory.service';

describe('ExpensecategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensecategoryService = TestBed.get(ExpensecategoryService);
    expect(service).toBeTruthy();
  });
});
