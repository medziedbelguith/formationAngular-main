import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormationComponent } from './login-formation.component';

describe('LoginFormationComponent', () => {
  let component: LoginFormationComponent;
  let fixture: ComponentFixture<LoginFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
