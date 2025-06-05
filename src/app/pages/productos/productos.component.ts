import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { TablaLibrosComponent } from '../../components/tabla-libros/tabla-libros.component';
import { FormsModule } from '@angular/forms';
import { TablaPeliculasComponent } from '../../components/tabla-peliculas/tabla-peliculas.component';
import { TablaRevistasComponent } from '../../components/tabla-revistas/tabla-revistas.component';
import { LibroService } from '../../components/tabla-libros/libro.service';
import { PeliculaService } from '../../components/tabla-peliculas/pelicula.service';
import { RevistaService } from '../../components/tabla-revistas/revista.service';

@Component({
  selector: 'app-productos',
  imports: [MenuComponent,TablaLibrosComponent,FormsModule,TablaPeliculasComponent,TablaRevistasComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  titulo:string=""
  filtroseleccionado:string = "libro"

  buscar(filtro:string){
    this.filtroseleccionado=filtro
    console.log(this.filtroseleccionado)
  }

  constructor(public libroService:LibroService,public peliculaService:PeliculaService,public revistaService:RevistaService){}

  buscarProducto(){
    switch (this.filtroseleccionado) {
      case 'libro':
        //console.log(this.libroService.libros)
       this.libroService.libros= this.libroService.libros.filter(libro=>libro.titulo.toLowerCase().includes(this.titulo.toLowerCase()))
        break;
      case 'pelicula':
        this.peliculaService.peliculas=this.peliculaService.peliculas.filter(pelicula=>pelicula.titulo.toLowerCase().includes(this.titulo.toLowerCase()))
          break;
      case 'revista':
        this.revistaService.revistas=this.revistaService.revistas.filter(revista=>revista.titulo.toLowerCase().includes(this.titulo.toLowerCase()))
          break;
      default:
        break;
    }
  }
}
