import { TestBed } from '@angular/core/testing';

import { CategoriesFormationService } from './categories-formation.service';

describe('CategoriesFormationService', () => {
  let service: CategoriesFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
