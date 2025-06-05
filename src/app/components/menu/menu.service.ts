import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

   readonly url="http://localhost:8080/api/usuarios"

  constructor(private http:HttpClient) { }

  buscarUsuario(user:any){
    const url=`${this.url}/${user}`
    return this.http.get<any>(url)
  }
}
