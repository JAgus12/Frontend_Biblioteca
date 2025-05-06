import { Component } from '@angular/core';
import { LibroService } from './libro.service';

@Component({
  selector: 'app-tabla-libros',
  imports: [],
  templateUrl: './tabla-libros.component.html',
  styleUrl: './tabla-libros.component.css'
})
export class TablaLibrosComponent {
 
  constructor(public libroService:LibroService){

  }
  // ngOnInit():void{
  //   this.getLibros()
  // }

  getLibros(){
    this.libroService.getLibros().subscribe({
      next:(data)=>{
        this.libroService.libros = data;
        console.log(data)
      },
      error:() =>{
        console.log('error')
      }
    })
  }
}
