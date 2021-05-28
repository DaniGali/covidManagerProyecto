import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActuacionModel } from '../model/ActuacionModel';

@Injectable({
  providedIn: 'root'
})
export class ActuacionService {

  url: string = 'https://covidmanagerfinal.herokuapp.com/actuacion';
  url2: string = 'https://covidmanagerfinal.herokuapp.com/actuaciones';

  constructor(private http: HttpClient) { }

  getActuaciones(){
    return this.http.get<any>(this.url2);
  }

  addActuacion(actuacion: ActuacionModel, id: string){
    return this.http.post<any>(this.url+'/incidencia'+id, actuacion);
  }

  deleteActuacion(id: string){
    return this.http.delete<ActuacionModel>(this.url+'/'+id);
  }
}
