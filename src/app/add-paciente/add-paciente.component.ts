import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.scss']
})
export class AddPacienteComponent implements OnInit {
  addPacienteForm: pacienteForm = new pacienteForm();

  @ViewChild("pacienteForm")
  pacienteForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {  }

  AddPaciente(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.savePaciente(this.addPacienteForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
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
