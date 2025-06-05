import { Component, inject } from '@angular/core';
import { LibroService } from './libro.service';
import { AlquilerService } from '../../pages/alquileres/alquiler.service';
import { Alquiler } from '../../models/alquiler';
import { ToastrService,ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-tabla-libros',
  imports: [],
  templateUrl: './tabla-libros.component.html',
  styleUrl: './tabla-libros.component.css'
})
export class TablaLibrosComponent {
 
  cantidad:any;
  librosDisponibles:any[]=[];
  constructor(public libroService:LibroService,public alquilerService:AlquilerService,private toastr:ToastrService){
  }
  ngOnInit():void{
    this.getLibros()
  }

  mostrarToast(){
    console.log('se va mostar')
    this.toastr.success('Alquiler realizado correctamente')
  }

  getLibros(){
    this.libroService.getLibros().subscribe({
      next:(data)=>{
        data.forEach(libro=>{
          //console.log(data)
          //console.log(libro.producto_id)
          this.alquilerService.buscarAlquiler(libro.producto_id).subscribe({
            next:(cantidad)=>{
              if(cantidad==libro.unidades){
                console.log('Estan todos alquilados')
                // this.cantidad=cantidad
                //console.log(cantidad)
              }else{
                console.log(libro)
                this.librosDisponibles.push(libro)
              }
              
             
            },
            error:()=>{
              console.log('error')
            }
          })
          //console.log(this.cantidad)
        })
        this.libroService.libros = this.librosDisponibles;
        //console.log(data)
      },
      error:() =>{
        console.log('error')
      }
    })
  }


  alquilarLibro(id:any){
    const newAlquiler:Alquiler={
      productoId:id,
      usuario:localStorage.getItem('user')!
    }

    this.alquilerService.alquilarProducto(newAlquiler).subscribe({
      next:(data)=>{
        //console.log('hecho')
      this.mostrarToast()
        
      },
      error:()=>{
        this.toastr.success('Solo puedes alquilar uno')
        console.log('error')
      }
    })
  }
}
