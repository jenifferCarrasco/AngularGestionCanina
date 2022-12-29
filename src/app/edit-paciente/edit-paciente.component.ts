import { DatePipe, Time } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.scss']
})
export class EditPacienteComponent implements OnInit {
  editPacienteForm: pacienteForm = new pacienteForm();

  @ViewChild("pacienteForm")
  pacienteForm!: NgForm;

  isSubmitted: boolean = false;
  pacienteId: any;


  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.pacienteId = this.route.snapshot.params['pacienteId'];
    this.getPacienteDetailById();
  }
  getPacienteDetailById() {
    this.httpProvider.getPacienteDetailById(this.pacienteId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          //cambias datos
          this.editPacienteForm.Id = resultData.id;
          this.editPacienteForm.Nombre = resultData.nombre;
          this.editPacienteForm.Raza = resultData.raza;
          this.editPacienteForm.Propietario = resultData.propietario;
          this.editPacienteForm.Sexo = resultData.sexo;
          this.editPacienteForm.fechaCreacion = resultData.fechacreacion;
          this.editPacienteForm.fechamodificacion = resultData.fechamodif;
        }
      }
    },
      (error: any) => { });
  }

  EditPaciente(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.savePaciente(this.editPacienteForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class pacienteForm {
  //cambiar datos
  Id: any= "";
  Nombre: string = "";
  Raza: string = "";
  Propietario: any= "";
  Sexo: string = "";
  fechaCreacion:  any = "";
  fechamodificacion : any= "";
}