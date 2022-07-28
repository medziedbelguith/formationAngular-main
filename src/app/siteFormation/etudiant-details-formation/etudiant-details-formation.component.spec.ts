import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantDetailsFormationComponent } from './etudiant-details-formation.component';

describe('EtudiantDetailsFormationComponent', () => {
  let component: EtudiantDetailsFormationComponent;
  let fixture: ComponentFixture<EtudiantDetailsFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantDetailsFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantDetailsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
