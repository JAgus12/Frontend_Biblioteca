import { Component, inject } from '@angular/core';
import { UserRegistro } from '../../models/user-registro';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistroService } from './registro.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  
  constructor(public registroService:RegistroService){}

  registro=new FormGroup({
    nombre:new FormControl('',Validators.required),
    apellido1:new FormControl('',Validators.required),
    apellido2:new FormControl(''),
    email:new FormControl('',[Validators.email,Validators.required]),
    telefono:new FormControl('',Validators.required),
    fechaNacimiento:new FormControl('',Validators.required),
    usuario:new FormControl('',Validators.required),
    password:new FormControl('',Validators.minLength(6)),
    comprobacionPassword:new FormControl('',Validators.required)
  })

  route=inject(Router)

  registrarse(){
    //console.log(this.registro.value)
    if(this.registro.valid){
        if(this.registro.value.password==this.registro.value.comprobacionPassword){
          const userRegistro:UserRegistro={
                              nombre:this.registro.value.nombre??'',
                              apellido1:this.registro.value.apellido1??'',
                              apellido2:this.registro.value.apellido2??'',
                              email:this.registro.value.email??'',
                              telefono:this.registro.value.telefono??'',
                              fechaNacimiento:new Date(this.registro.value.fechaNacimiento??''),
                              usuario:this.registro.value.usuario??'',
                              password:this.registro.value.password??''
                            }
            console.log(userRegistro)
            this.registroService.registroUser(userRegistro).subscribe({
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
    }else{

    }

   
   
  }
}
