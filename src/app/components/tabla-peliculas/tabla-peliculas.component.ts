import { Component } from '@angular/core';
import { PeliculaService } from './pelicula.service';
import { AlquilerService } from '../../pages/alquileres/alquiler.service';
import { Alquiler } from '../../models/alquiler';

@Component({
  selector: 'app-tabla-peliculas',
  imports: [],
  templateUrl: './tabla-peliculas.component.html',
  styleUrl: './tabla-peliculas.component.css'
})
export class TablaPeliculasComponent {

  peliculasDisponibles:any[]=[]
  constructor(public peliculaService:PeliculaService,public alquilerService:AlquilerService){
    this.getPeliculas()
  }

  getPeliculas(){
    this.peliculaService.getPeliculas().subscribe({
      next:(data)=>{
        data.forEach(pelicula=>{
          this.alquilerService.buscarAlquiler(pelicula.producto_id).subscribe({
            next:(cantidad)=>{
              if(cantidad==pelicula.unidades){
                console.log('Estan todos alquilados')
              }else{
                this.peliculasDisponibles.push(pelicula)
              }
            },
            error:()=>{
              console.log('error')
            }
          })
        })
        this.peliculaService.peliculas=this.peliculasDisponibles;
      },
      error:()=>{
        console.log('error recuperando peliculas')
      }
    })
  }

  alquilarPelicula(id:any){
    //console.log(id)
    this.peliculaService.getPelicula(id).subscribe({
      next:(data)=>{
        //console.log(data)
        const newAlquiler:Alquiler={
          productoId:id,
          usuario:localStorage.getItem('user')!
        }
        //console.log(newAlquiler)
        this.alquilerService.alquilarProducto(newAlquiler).subscribe({
          next:(data)=>{
            console.log("hecho")
          },
          error:error=>{
            console.log('error guardando nuevo alquiler')
          }
        })
      },
      error:()=>{
        console.log('error buscando pelicula')
      }
    })
  }


}
