import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Galerie4Component } from './galerie4.component';

describe('Galerie4Component', () => {
  let component: Galerie4Component;
  let fixture: ComponentFixture<Galerie4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Galerie4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Galerie4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
