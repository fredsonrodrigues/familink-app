import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilinkAlunoComponent } from './familink-aluno.component';

describe('FamilinkAlunoComponent', () => {
  let component: FamilinkAlunoComponent;
  let fixture: ComponentFixture<FamilinkAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilinkAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilinkAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
