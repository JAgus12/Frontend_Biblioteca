import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlquilerService } from '../../pages/alquileres/alquiler.service';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  readonly url='http://localhost:8080/api/libros'

  libros:any[]=[];
  constructor(private http:HttpClient) {
    this.libros=[]
   }

   getLibros(){
    return this.http.get<any[]>(this.url)
   }

  
}
