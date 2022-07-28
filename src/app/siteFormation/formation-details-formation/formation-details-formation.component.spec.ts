import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDetailsFormationComponent } from './formation-details-formation.component';

describe('FormationDetailsFormationComponent', () => {
  let component: FormationDetailsFormationComponent;
  let fixture: ComponentFixture<FormationDetailsFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationDetailsFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationDetailsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
