import { Component, ElementRef, inject, ViewChild, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  user=localStorage.getItem('user')
  route=inject(Router)
  seleccionado=localStorage.getItem('seleccionMenu')?localStorage.getItem('seleccionMenu'):0
  seleccion(index:number){
    this.seleccionado=index
    console.log(this.seleccionado)
    localStorage.setItem('seleccionMenu',index.toString())
  }

  @ViewChild('nombre') nombre!:ElementRef

  logOut(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }

  constructor(public menuService:MenuService){
    console.log(this.user)
    this.getUsuario(this.user)
  }

  getUsuario(user:any){
    this.menuService.buscarUsuario(user).subscribe({
      next:(data)=>{
        // @ViewChild('primerLi') primerLi!: ElementRef<HTMLLIElement>;
        //console.log(data)
        this.nombre.nativeElement.textContent=`${data.nombre} ${data.apellido1}`
      },
      error:()=>{
        console.log('error')
      }
    })
  }
}
