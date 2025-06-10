import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alquiler } from '../../models/alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  readonly url='http://localhost:8080/api/alquileres'
  readonly urlbuscar='http://localhost:8080/api/alquileres/productosAlquilados'
  alquileres:any[]=[]
  alquilerUsuario:any=[]
  alquileresLibros:any
  alquileresRevistas:any
  alquileresPeliculas:any
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

   buscarAlquilerUsuario(usuario:any){
    const url=`${this.url}/usuario/${usuario}`
    return this.http.get<any>(url)
   }

   alquilarProducto(producto:any){
    return this.http.post<any>(this.url,producto)
   }

   devolverProducto(id:any){
      const url=`${this.url}/${id}`
      return this.http.delete<any>(url)
   }


}
