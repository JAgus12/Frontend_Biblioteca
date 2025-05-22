import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { LoginService } from './login.service';
import { UserLogin } from '../../models/userLogin';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   usuario:UserLogin = {
    usuario:'',
    password:''
   };
   ver=false;
   mostrar(){
    this.ver=!this.ver;
  }
    constructor(public loginService:LoginService){

    }
    route=inject(Router)

  iniciosesion(){
    console.log(this.usuario)
    this.loginService.loginUser(this.usuario).subscribe({
      next:(response)=>{
        if(response.token){
          this.route.navigate(['/dashboard'])
          localStorage.setItem('token',response.token)
        }else{
          alert('Datos Incorrectos')
        }
      },
      error:()=>{
        console.log("error en el login")
      }
    })
   
  }
}
