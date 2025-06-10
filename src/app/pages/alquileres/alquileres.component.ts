import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { AlquilerService } from './alquiler.service';
import { DatePipe } from '@angular/common';
import { LogueadoComponent } from '../logueado/logueado.component';
import { ToastrService,ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-alquileres',
  imports: [MenuComponent,DatePipe],
  templateUrl: './alquileres.component.html',
  styleUrl: './alquileres.component.css'
})
export class AlquileresComponent {

  user=localStorage.getItem('user');
  constructor(public alquilerService:AlquilerService,private toastr:ToastrService){
    //this.getAlquileres()
    this.getAlquileresUsuario()
  }

  getAlquileres(){
    this.alquilerService.getAlquileres().subscribe({
      next:(data) => {
        this.alquilerService.alquileres=data
        //console.log(data)
      },
      error:() => {
        console.log('error recuperando alquileres')
      }
    })
  }

  getAlquileresUsuario(){
    this.alquilerService.buscarAlquilerUsuario(this.user).subscribe({
      next:(data)=>{
        this.alquilerService.alquilerUsuario=data
        
        //console.log(data)
        
        //console.log(this.alquilerService.alquilerUsuario)
      },
      error:()=>{
        console.log('error buscando alquileres usuario')
      }
    })
  }

  devolverProducto(id:any){
    this.alquilerService.devolverProducto(id).subscribe({
      next:(data)=>{
        //console.log('devuelto')
        this.getAlquileresUsuario()
        this.toastr.success('Producto Devuelto')
      },
      error:()=>{
        console.log('error eliminando producto')
      }
    })
  }


}
