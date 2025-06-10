import { Component } from '@angular/core';
import { MenuComponent } from '../../../components/menu/menu.component';
import { MenuService } from '../../../components/menu/menu.service';

@Component({
  selector: 'app-cuenta',
  imports: [MenuComponent],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {
usuario:any={}

  constructor(public menuService:MenuService){
    this.buscarUsuario()
    //console.log(this.usuario)
  }

  buscarUsuario(){
    this.menuService.buscarUsuario(localStorage.getItem('user')).subscribe({
      next:(data)=>{
        this.usuario=data
        console.log(data)
      },
      error:()=>{
        console.log('error')
      }
    })
  }
}
