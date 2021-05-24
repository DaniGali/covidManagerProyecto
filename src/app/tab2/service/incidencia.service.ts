import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  url: string = 'https://covidmanagerfinal.herokuapp.com/incidencia';

  constructor(private http: HttpClient) { }
}
