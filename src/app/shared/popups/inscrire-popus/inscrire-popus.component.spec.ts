import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrirePopusComponent } from './inscrire-popus.component';

describe('InscrirePopusComponent', () => {
  let component: InscrirePopusComponent;
  let fixture: ComponentFixture<InscrirePopusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscrirePopusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrirePopusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
