import { Component } from '@angular/core';
import { RevistaService } from './revista.service';
import { AlquilerService } from '../../pages/alquileres/alquiler.service';
import { Alquiler } from '../../models/alquiler';
import { ToastrService,ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-tabla-revistas',
  imports: [],
  templateUrl: './tabla-revistas.component.html',
  styleUrl: './tabla-revistas.component.css'
})
export class TablaRevistasComponent {

  revistasDisponibles:any[]=[]
  constructor(public revistaService:RevistaService,public alquilerService:AlquilerService,private toastr:ToastrService){
    this.getRevistas()
  }

  getRevistas(){
    this.revistaService.getRevistas().subscribe({
      next:(data)=>{
        data.forEach(revista=>{
          this.alquilerService.buscarAlquiler(revista.producto_id).subscribe({
            next:(cantidad)=>{
              if(cantidad==revista.unidades){
                console.log('estan todos alquilados')
              }else{
                this.revistasDisponibles.push(revista)
              }
            },
            error:()=>{
              console.log('error')
            }
          })
          this.revistaService.revistas=this.revistasDisponibles;
        })
      },
      error:()=>{
        console.log('error recuperando revistas')
      }
    })
  }

  alquilarRevista(id:any){
    const newAlquiler:Alquiler={
      productoId:id,
      usuario:localStorage.getItem('user')!
    }

    this.alquilerService.alquilarProducto(newAlquiler).subscribe({
      next:(data)=>{
        this.toastr.success('Alquiler realizado')
        this.alquilerService.alquileresRevistas++
        console.log('hecho')
      },
      error:()=>{
        console.log('error')
      }
    })
  }
}
