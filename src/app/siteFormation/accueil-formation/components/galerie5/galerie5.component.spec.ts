import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Galerie5Component } from './galerie5.component';

describe('Galerie5Component', () => {
  let component: Galerie5Component;
  let fixture: ComponentFixture<Galerie5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Galerie5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Galerie5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
