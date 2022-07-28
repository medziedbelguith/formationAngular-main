import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieDetailsFormationComponent } from './categorie-details-formation.component';

describe('CategorieDetailsFormationComponent', () => {
  let component: CategorieDetailsFormationComponent;
  let fixture: ComponentFixture<CategorieDetailsFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieDetailsFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieDetailsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
