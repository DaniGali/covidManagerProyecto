import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoModel } from '../model/AlumnoModel';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  url: string = 'https://covidmanagerfinal.herokuapp.com/alumnos';
  url2: string = 'https://covidmanagerfinal.herokuapp.com/alumno';

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

  addAlumno(alumno: AlumnoModel): Observable<any>{
    return this.http.post<any>(this.url2, alumno);
  }

  deleteAlumno(id: string){
    return this.http.delete<AlumnoModel>(this.url2+'/'+id, this.httpOptions)
  }

  putAlumno(alumno: AlumnoModel){
    return this.http.put(this.url2, alumno);
  }
}
