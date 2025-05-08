import { Component } from '@angular/core';
import { RevistaService } from './revista.service';

@Component({
  selector: 'app-tabla-revistas',
  imports: [],
  templateUrl: './tabla-revistas.component.html',
  styleUrl: './tabla-revistas.component.css'
})
export class TablaRevistasComponent {

  constructor(public revistaService:RevistaService){
    this.getRevistas()
  }

  getRevistas(){
    this.revistaService.getRevistas().subscribe({
      next:(data)=>{
        this.revistaService.revistas = data
        console.log(data)
      },
      error:()=>{
        console.log('error recuperando revistas')
      }
    })
  }
}
