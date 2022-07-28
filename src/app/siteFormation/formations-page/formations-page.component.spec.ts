import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsPageComponent } from './formations-page.component';

describe('FormationsPageComponent', () => {
  let component: FormationsPageComponent;
  let fixture: ComponentFixture<FormationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
