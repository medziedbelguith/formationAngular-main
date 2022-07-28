import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCentreFormationComponent } from './update-centre-formation.component';

describe('UpdateCentreFormationComponent', () => {
  let component: UpdateCentreFormationComponent;
  let fixture: ComponentFixture<UpdateCentreFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCentreFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCentreFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
