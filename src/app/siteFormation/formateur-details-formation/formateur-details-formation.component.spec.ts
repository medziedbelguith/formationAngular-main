import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurDetailsFormationComponent } from './formateur-details-formation.component';

describe('FormateurDetailsFormationComponent', () => {
  let component: FormateurDetailsFormationComponent;
  let fixture: ComponentFixture<FormateurDetailsFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurDetailsFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurDetailsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
