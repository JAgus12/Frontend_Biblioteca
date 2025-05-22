import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../../models/userLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly urlLogin="http://localhost:8080/auth/login"
  constructor(private http:HttpClient) { 

  }

  loginUser(userLogin:UserLogin):Observable<{token:string}>{
    return this.http.post<{token:string}>(this.urlLogin,userLogin);
  }

  getToken(){
    return localStorage.getItem('token') || ''
  }
}
