import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtModel } from '../model/JwtModel';
import { LoginUsuarioModel } from '../model/LoginUsuarioModel'

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authURL = 'http://localhost:8080/auth/login';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuarioModel): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authURL + 'login', usuario, cabecera);
  }
}
