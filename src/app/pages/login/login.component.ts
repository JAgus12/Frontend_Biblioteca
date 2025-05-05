import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   ver=false;
   user:string='';
   password:string='';
   mostrar(){
    this.ver=!this.ver;
  }
    route=inject(Router)

  iniciosesion(){
    console.log(this.user)
    console.log(this.password)
    if(this.password!='' && this.user!=''){
      this.route.navigate(['/dashboard'])
    }
   
  }
}
