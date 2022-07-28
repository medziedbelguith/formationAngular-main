import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateursPageComponent } from './formateurs-page.component';

describe('FormateursPageComponent', () => {
  let component: FormateursPageComponent;
  let fixture: ComponentFixture<FormateursPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateursPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
