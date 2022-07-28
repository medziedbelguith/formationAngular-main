import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterFormationPageComponent } from './center-formation-page.component';

describe('CenterFormationPageComponent', () => {
  let component: CenterFormationPageComponent;
  let fixture: ComponentFixture<CenterFormationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterFormationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterFormationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
