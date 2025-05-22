import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  route=inject(Router)
  seleccionado=localStorage.getItem('seleccionMenu')?localStorage.getItem('seleccionMenu'):0
  seleccion(index:number){
    this.seleccionado=index
    console.log(this.seleccionado)
    localStorage.setItem('seleccionMenu',index.toString())
  }

  logOut(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}
