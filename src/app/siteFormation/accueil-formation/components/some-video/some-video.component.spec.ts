import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeVideoComponent } from './some-video.component';

describe('SomeVideoComponent', () => {
  let component: SomeVideoComponent;
  let fixture: ComponentFixture<SomeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
