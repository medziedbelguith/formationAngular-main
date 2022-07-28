import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilFormationComponent } from './accueil-formation.component';

describe('AccueilFormationComponent', () => {
  let component: AccueilFormationComponent;
  let fixture: ComponentFixture<AccueilFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
