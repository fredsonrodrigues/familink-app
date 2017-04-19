import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FamilinkAlunoComponent } from './familink-aluno/familink-aluno.component';
import { FamilinkAlunoPerfilComponent } from './familink-aluno-perfil/familink-aluno-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilinkAlunoComponent,
    FamilinkAlunoPerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
