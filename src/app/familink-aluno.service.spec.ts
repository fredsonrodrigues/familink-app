import { TestBed, inject } from '@angular/core/testing';

import { FamilinkAlunoService } from './familink-aluno.service';

describe('FamilinkAlunoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamilinkAlunoService]
    });
  });

  it('should ...', inject([FamilinkAlunoService], (service: FamilinkAlunoService) => {
    expect(service).toBeTruthy();
  }));
});
