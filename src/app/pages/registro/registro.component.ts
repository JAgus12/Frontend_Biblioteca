import { Component } from '@angular/core';
import { UserRegistro } from '../../models/user-registro';
import { FormsModule } from '@angular/forms';

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


  registrarse(){
    console.log(this.userRegistro)
  }
}
