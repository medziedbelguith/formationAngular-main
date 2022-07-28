import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPopupsComponent } from './login-popups.component';

describe('LoginPopupsComponent', () => {
  let component: LoginPopupsComponent;
  let fixture: ComponentFixture<LoginPopupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPopupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
