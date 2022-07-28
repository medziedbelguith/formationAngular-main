import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInscriptionEtudiantComponent } from './list-inscription-etudiant.component';

describe('ListInscriptionEtudiantComponent', () => {
  let component: ListInscriptionEtudiantComponent;
  let fixture: ComponentFixture<ListInscriptionEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInscriptionEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInscriptionEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
