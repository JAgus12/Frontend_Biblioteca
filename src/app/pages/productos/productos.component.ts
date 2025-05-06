import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { TablaLibrosComponent } from '../../components/tabla-libros/tabla-libros.component';
import { FormsModule } from '@angular/forms';
import { TablaPeliculasComponent } from '../../components/tabla-peliculas/tabla-peliculas.component';
import { TablaRevistasComponent } from '../../components/tabla-revistas/tabla-revistas.component';

@Component({
  selector: 'app-productos',
  imports: [MenuComponent,TablaLibrosComponent,FormsModule,TablaPeliculasComponent,TablaRevistasComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  filtroseleccionado:string = "libro"

  buscar(){
    this.filtroseleccionado=this.filtroseleccionado
    console.log(this.filtroseleccionado)
  }
}
