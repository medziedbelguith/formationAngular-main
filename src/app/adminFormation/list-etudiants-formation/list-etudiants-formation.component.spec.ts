import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantsFormationComponent } from './list-etudiants-formation.component';

describe('ListEtudiantsFormationComponent', () => {
  let component: ListEtudiantsFormationComponent;
  let fixture: ComponentFixture<ListEtudiantsFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEtudiantsFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtudiantsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
