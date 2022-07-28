import { TestBed } from '@angular/core/testing';

import { ProduitsFormationService } from './produits-formation.service';

describe('ProduitsFormationService', () => {
  let service: ProduitsFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitsFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
