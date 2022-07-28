import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEtudiantComponent } from './profil-etudiant.component';

describe('ProfilEtudiantComponent', () => {
  let component: ProfilEtudiantComponent;
  let fixture: ComponentFixture<ProfilEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
