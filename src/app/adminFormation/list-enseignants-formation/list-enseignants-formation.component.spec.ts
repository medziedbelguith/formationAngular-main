import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnseignantsFormationComponent } from './list-enseignants-formation.component';

describe('ListEnseignantsFormationComponent', () => {
  let component: ListEnseignantsFormationComponent;
  let fixture: ComponentFixture<ListEnseignantsFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnseignantsFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnseignantsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
