import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "https://localhost:5001/";

var httpLink = {
  getAllPaciente: apiUrl + "//api/Pacientes",
  deletePacienteById: apiUrl + "/api/Pacientes/id",
  getPacienteDetailById: apiUrl + "/api/Pacientes/id",
  savePaciente: apiUrl + "/api/Pacientes"
}
@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllPaciente(): Observable<any> {
    return this.webApiService.get(httpLink.getAllPaciente);
  }
  public deletePacienteById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deletePacienteById + '?pacienteId=' + model, "");
  }
  public getPacienteDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getPacienteDetailById + '?pacienteId=' + model);
  }
  public savePaciente(model: any): Observable<any> {
    return this.webApiService.post(httpLink.savePaciente, model);
  }  
}