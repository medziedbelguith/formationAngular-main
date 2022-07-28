import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCentreFormationComponent } from './new-centre-formation.component';

describe('NewCentreFormationComponent', () => {
  let component: NewCentreFormationComponent;
  let fixture: ComponentFixture<NewCentreFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCentreFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCentreFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
