import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationAccueilComponent } from './formation-accueil.component';

describe('FormationAccueilComponent', () => {
  let component: FormationAccueilComponent;
  let fixture: ComponentFixture<FormationAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
