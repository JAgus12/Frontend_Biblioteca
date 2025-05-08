import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  readonly url='http://localhost:8080/api/peliculas'
  peliculas:any[]=[]
  constructor(private http:HttpClient) {
    this.peliculas=[]
   }

   getPeliculas(){
    return this.http.get<any[]>(this.url)
   }
}
