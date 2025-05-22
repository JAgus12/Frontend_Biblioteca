import { Component } from '@angular/core';
import { PeliculaService } from './pelicula.service';
import { AlquilerService } from '../../pages/alquileres/alquiler.service';

@Component({
  selector: 'app-tabla-peliculas',
  imports: [],
  templateUrl: './tabla-peliculas.component.html',
  styleUrl: './tabla-peliculas.component.css'
})
export class TablaPeliculasComponent {

  constructor(public peliculaService:PeliculaService,public alquilerService:AlquilerService){
    this.getPeliculas()
  }

  getPeliculas(){
    this.peliculaService.getPeliculas().subscribe({
      next:(data)=>{
        this.peliculaService.peliculas=data
        console.log(data)
      },
      error:()=>{
        console.log('error recuperando peliculas')
      }
    })
  }

  alquilarPelicula(id:any){
    console.log(id)
    this.peliculaService.getPelicula(id).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:()=>{
        console.log('error buscando pelicula')
      }
    })
  }


}
