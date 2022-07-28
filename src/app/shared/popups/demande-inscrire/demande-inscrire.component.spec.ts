import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeInscrireComponent } from './demande-inscrire.component';

describe('DemandeInscrireComponent', () => {
  let component: DemandeInscrireComponent;
  let fixture: ComponentFixture<DemandeInscrireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeInscrireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeInscrireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
