import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilinkAlunoPerfilComponent } from './familink-aluno-perfil.component';

describe('FamilinkAlunoPerfilComponent', () => {
  let component: FamilinkAlunoPerfilComponent;
  let fixture: ComponentFixture<FamilinkAlunoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilinkAlunoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilinkAlunoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
