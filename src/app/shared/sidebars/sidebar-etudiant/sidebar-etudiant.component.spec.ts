import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEtudiantComponent } from './sidebar-etudiant.component';

describe('SidebarEtudiantComponent', () => {
  let component: SidebarEtudiantComponent;
  let fixture: ComponentFixture<SidebarEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
