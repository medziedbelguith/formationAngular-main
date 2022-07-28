import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInscriptionEnseignantComponent } from './list-inscription-enseignant.component';

describe('ListInscriptionEnseignantComponent', () => {
  let component: ListInscriptionEnseignantComponent;
  let fixture: ComponentFixture<ListInscriptionEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInscriptionEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInscriptionEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
