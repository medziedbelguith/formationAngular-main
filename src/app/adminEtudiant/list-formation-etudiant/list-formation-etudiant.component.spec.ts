import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormationEtudiantComponent } from './list-formation-etudiant.component';

describe('ListFormationEtudiantComponent', () => {
  let component: ListFormationEtudiantComponent;
  let fixture: ComponentFixture<ListFormationEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormationEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormationEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
