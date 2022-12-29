import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacienteComponent } from './add-paciente/add-paciente.component';
import { EditPacienteComponent } from './edit-paciente/edit-paciente.component';
import { HomeComponent } from './home/home.component';
import { ViewPacienteComponent } from './view-paciente/view-paciente.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewPaciente/:pacienteId', component: ViewPacienteComponent },
  { path: 'AddPaciente', component: AddPacienteComponent },
  { path: 'EditPaciente/:pacienteId', component: EditPacienteComponent } 
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
