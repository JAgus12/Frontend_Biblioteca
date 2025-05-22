import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistro } from '../../models/user-registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  readonly urlRegistro="http://localhost:8080/auth/registro"
  constructor(private http:HttpClient) { }

  registroUser(userRegistro:UserRegistro):Observable<{token:string}>{
    return this.http.post<{token:string}>(this.urlRegistro,userRegistro)
  }

  getToken(){
    return localStorage.getItem('token') || ''
  }
}
