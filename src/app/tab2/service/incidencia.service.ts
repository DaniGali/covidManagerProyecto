import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IncidenciaModel } from '../model/IncidenciaModel';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  url: string = 'https://covidmanagerfinal.herokuapp.com/incidencias';
  url2: string = 'https://covidmanagerfinal.herokuapp.com/incidencia';

  constructor(private http: HttpClient) { }

  getIncidencias(){
    return this.http.get<any>(this.url)
  }

  addIncidencia(incidencia: IncidenciaModel){
    return this.http.post<any>(this.url, incidencia);
  }

  deleteIncidencia(id: string){
    return this.http.delete<IncidenciaModel>(this.url2+'/'+id);
  }
}
