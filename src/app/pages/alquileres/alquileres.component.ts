import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { AlquilerService } from './alquiler.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alquileres',
  imports: [MenuComponent,DatePipe],
  templateUrl: './alquileres.component.html',
  styleUrl: './alquileres.component.css'
})
export class AlquileresComponent {

  constructor(public alquilerService:AlquilerService){
    this.getAlquileres()
  }

  getAlquileres(){
    this.alquilerService.getAlquileres().subscribe({
      next:(data) => {
        this.alquilerService.alquileres=data
        console.log(data)
      },
      error:() => {
        console.log('error recuperando alquileres')
      }
    })
  }
}
