import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCentreFormationComponent } from './list-centre-formation.component';

describe('ListCentreFormationComponent', () => {
  let component: ListCentreFormationComponent;
  let fixture: ComponentFixture<ListCentreFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCentreFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCentreFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
