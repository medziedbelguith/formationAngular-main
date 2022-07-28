import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFormationComponent } from './delete-formation.component';

describe('DeleteFormationComponent', () => {
  let component: DeleteFormationComponent;
  let fixture: ComponentFixture<DeleteFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
