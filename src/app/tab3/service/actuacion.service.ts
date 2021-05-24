import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActuacionService {

  url: string = 'https://covidmanagerfinal.herokuapp.com/actuacion';

  constructor(private http: HttpClient) { }
}
