import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsVoisinComponent } from './formations-voisin.component';

describe('FormationsVoisinComponent', () => {
  let component: FormationsVoisinComponent;
  let fixture: ComponentFixture<FormationsVoisinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsVoisinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsVoisinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
