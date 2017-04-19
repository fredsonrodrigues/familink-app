import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FamilinkAlunoComponent } from './familink-aluno/familink-aluno.component';
import { FamilinkAlunoPerfilComponent } from './familink-aluno-perfil/familink-aluno-perfil.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: FamilinkAlunoComponent },
  { path: 'aluno/:id', component: FamilinkAlunoPerfilComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FamilinkAlunoComponent,
    FamilinkAlunoPerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
