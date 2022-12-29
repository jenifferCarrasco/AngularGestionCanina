import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-paciente',
  templateUrl: './view-paciente.component.html',
  styleUrls: ['./view-paciente.component.scss']
})
export class ViewPacienteComponent implements OnInit {

  pacienteId: any;
  pacienteDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.pacienteId = this.route.snapshot.params['pacienteId'];      
    this.getPacienteDetailById();
  }

  getPacienteDetailById() {       
    this.httpProvider.getPacienteDetailById(this.pacienteId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.pacienteDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}