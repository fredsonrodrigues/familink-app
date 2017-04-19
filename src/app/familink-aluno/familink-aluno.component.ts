import { Component, OnInit } from '@angular/core';
import {Aluno} from './Aluno';
import {FamilinkAlunoService} from '../familink-aluno.service';

@Component({
	selector: 'app-familink-aluno',
	templateUrl: './familink-aluno.component.html',
	styleUrls: ['./familink-aluno.component.css'],
	providers: [FamilinkAlunoService]
})
export class FamilinkAlunoComponent implements OnInit {
	aluno: Aluno[];
	errorMessage: string;

	constructor(private familinkAluno: FamilinkAlunoService) { }

	ngOnInit() {
		this.getAluno();
	}

	getAluno() {
		this.familinkAluno.getAluno()
		.subscribe(
			aluno => this.aluno = aluno,
			error => this.errorMessage = <any> error
			);
			console.log(this.aluno)
	}
}
