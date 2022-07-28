import { TestBed } from '@angular/core/testing';

import { FormateursFormationService } from './formateurs-formation.service';

describe('FormateursFormationService', () => {
  let service: FormateursFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormateursFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
