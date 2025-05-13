import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  readonly url='http://localhost:8080/api/alquileres'
  readonly urlbuscar='http://localhost:8080/api/alquileres/productosAlquilados'
  alquileres:any[]=[]
  constructor(private http:HttpClient) {
    this.alquileres=[]
   }

   getAlquileres(){
    return this.http.get<any[]>(this.url)
   }

   buscarAlquiler(producto_id:number){
    const urlbuscar=`${this.urlbuscar}/${producto_id}`
    return this.http.get<number>(urlbuscar)
   }

   alquilarProducto(producto:any){
    return this.http.post<any>(this.url,producto)
   }
}
