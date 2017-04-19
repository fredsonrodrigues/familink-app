import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Aluno}       from './familink-aluno/aluno';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FamilinkAlunoService {

  constructor(private http:Http) {}

  private _alunosUrl = 'http://api.familink.com.br/rest/alunos';

  getAluno() {
    return this.http.get(this._alunosUrl)
                    .map(res => <Aluno[]> res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
