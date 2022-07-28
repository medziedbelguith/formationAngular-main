import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSiteFormationComponent } from './navbar-site-formation.component';

describe('NavbarSiteFormationComponent', () => {
  let component: NavbarSiteFormationComponent;
  let fixture: ComponentFixture<NavbarSiteFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSiteFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSiteFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
