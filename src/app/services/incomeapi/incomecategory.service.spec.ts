import { TestBed } from '@angular/core/testing';

import { IncomecategoryService } from './incomecategory.service';

describe('IncomecategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomecategoryService = TestBed.get(IncomecategoryService);
    expect(service).toBeTruthy();
  });
});
