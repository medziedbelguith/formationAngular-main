import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposPageComponent } from './propos-page.component';

describe('ProposPageComponent', () => {
  let component: ProposPageComponent;
  let fixture: ComponentFixture<ProposPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
