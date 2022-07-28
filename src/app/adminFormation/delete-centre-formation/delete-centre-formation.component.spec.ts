import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCentreFormationComponent } from './delete-centre-formation.component';

describe('DeleteCentreFormationComponent', () => {
  let component: DeleteCentreFormationComponent;
  let fixture: ComponentFixture<DeleteCentreFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCentreFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCentreFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
