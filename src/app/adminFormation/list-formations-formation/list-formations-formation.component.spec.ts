import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormationsFormationComponent } from './list-formations-formation.component';

describe('ListFormationsFormationComponent', () => {
  let component: ListFormationsFormationComponent;
  let fixture: ComponentFixture<ListFormationsFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormationsFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormationsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
