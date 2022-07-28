import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionFormationModalComponent } from './inscription-formation-modal.component';

describe('InscriptionFormationModalComponent', () => {
  let component: InscriptionFormationModalComponent;
  let fixture: ComponentFixture<InscriptionFormationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionFormationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionFormationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
