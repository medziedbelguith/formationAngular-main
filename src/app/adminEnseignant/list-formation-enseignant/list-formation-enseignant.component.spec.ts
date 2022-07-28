import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormationEnseignantComponent } from './list-formation-enseignant.component';

describe('ListFormationEnseignantComponent', () => {
  let component: ListFormationEnseignantComponent;
  let fixture: ComponentFixture<ListFormationEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormationEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormationEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
