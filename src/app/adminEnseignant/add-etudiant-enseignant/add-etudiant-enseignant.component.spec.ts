import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtudiantEnseignantComponent } from './add-etudiant-enseignant.component';

describe('AddEtudiantEnseignantComponent', () => {
  let component: AddEtudiantEnseignantComponent;
  let fixture: ComponentFixture<AddEtudiantEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEtudiantEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtudiantEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
