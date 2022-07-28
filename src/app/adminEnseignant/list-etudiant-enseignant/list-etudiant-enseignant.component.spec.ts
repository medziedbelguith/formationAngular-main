import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantEnseignantComponent } from './list-etudiant-enseignant.component';

describe('ListEtudiantEnseignantComponent', () => {
  let component: ListEtudiantEnseignantComponent;
  let fixture: ComponentFixture<ListEtudiantEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEtudiantEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtudiantEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
