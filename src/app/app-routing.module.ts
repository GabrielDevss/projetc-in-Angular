import { DashbordComponent } from './dashbord/dashbord.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessorComponent } from './professor/professor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'professor', component: ProfessorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
