import { Component, OnInit } from '@angular/core';
import {Aluno} from './aluno'; // O nome do arquivo deve ser em letra minuscula
import {FamilinkAlunoService} from '../familink-aluno.service';

@Component({
	selector: 'app-familink-aluno',
	templateUrl: './familink-aluno.component.html',
	styleUrls: ['./familink-aluno.component.css'],
	providers: [FamilinkAlunoService]
})
export class FamilinkAlunoComponent implements OnInit {
	alunos: Aluno[];
	errorMessage: string;

	constructor(private familinkAluno: FamilinkAlunoService) { }

	ngOnInit() {
		this.getAluno();
	}

	getAluno() {
		this.familinkAluno.getAluno()
		.subscribe(
			aluno => this.alunos = aluno,
			error => this.errorMessage = <any> error
			);
	}
}
