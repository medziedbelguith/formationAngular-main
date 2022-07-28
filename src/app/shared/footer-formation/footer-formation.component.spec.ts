import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFormationComponent } from './footer-formation.component';

describe('FooterFormationComponent', () => {
  let component: FooterFormationComponent;
  let fixture: ComponentFixture<FooterFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
