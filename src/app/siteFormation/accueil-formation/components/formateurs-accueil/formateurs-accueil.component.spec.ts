import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateursAccueilComponent } from './formateurs-accueil.component';

describe('FormateursAccueilComponent', () => {
  let component: FormateursAccueilComponent;
  let fixture: ComponentFixture<FormateursAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateursAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateursAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
