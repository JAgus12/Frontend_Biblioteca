import { Component, inject } from '@angular/core';
import { UserRegistro } from '../../models/user-registro';
import { FormsModule } from '@angular/forms';
import { RegistroService } from './registro.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  userRegistro:UserRegistro={
    nombre:'',
    apellido1:'',
    apellido2:'',
    email:'',
    telefono:'',
    fechaNacimiento:new Date(),
    usuario:'',
    password:''
  }
  comprobacion:string=''

  constructor(public registroService:RegistroService){

  }

  route=inject(Router)

  registrarse(){
    console.log(this.comprobacion)
    console.log(this.userRegistro)
    if(this.userRegistro.password==this.comprobacion){
    this.registroService.registroUser(this.userRegistro).subscribe({
          next:(response)=>{
            if(response.token){
              this.route.navigate(['/dashboard'])
              localStorage.setItem('token',response.token)
            }
          },
          error:()=>{
            console.log('error en registro')
          }
        })
      }else{
        alert('las contraseñas no coinciden')
      }
   
  }
}
