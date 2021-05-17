import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoModel } from '../model/AlumnoModel';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  url: string = 'https://covidmanagerproyecto.herokuapp.com/alumnos';
  url2: string = 'https://covidmanagerproyecto.herokuapp.com/alumno';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAlumnos(){
    return this.http.get<any>(this.url)
  }

  getAlumno(id: string){
    return this.http.get<AlumnoModel>(this.url2+'/'+id)
  }

  addAlumno(alumno): Observable<AlumnoModel>{
    return this.http.post<AlumnoModel>(this.url2, JSON.stringify(alumno), this.httpOptions)
  }

  deleteAlumno(id: string){
    return this.http.delete(this.url2+'/'+id)
  }

  putAlumno(alumno: AlumnoModel){
    return this.http.put(this.url2, alumno);
  }
}
