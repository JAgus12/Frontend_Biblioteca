import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RevistaService {

  readonly url='http://localhost:8080/api/revistas'
  revistas:any[]=[]
  constructor(private http:HttpClient) { 
    this.revistas=[]
  }

  getRevistas(){
    return this.http.get<any[]>(this.url)
  }
}
