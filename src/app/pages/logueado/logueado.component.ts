import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { LogueadoService } from './logueado.service';
import { Chart } from 'chart.js/auto';
import { count } from 'rxjs';

@Component({
  selector: 'app-logueado',
  imports: [MenuComponent],
  templateUrl: './logueado.component.html',
  styleUrl: './logueado.component.css'
})
export class LogueadoComponent {

  @ViewChild('chartCanvas',{static:true}) chartCanvas!:ElementRef;
  @ViewChild('chartAlquileres',{static:true}) chartAlquileres!:ElementRef;
  public chart!:Chart;
  public char2!:Chart

  ngOnInit():void{
  const data = {
  labels: [
    'Libros',
    'Peliculas',
    'Revistas'
  ],
  datasets: [{
    label: 'Cantidad Alquilados',
    data: [4, 4, 1],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
  };

  this.chart=new Chart(this.chartCanvas.nativeElement,{
    type:'doughnut',
    data
  })

  this.chart.resize(500,500)
  
  const data2 = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [{
    label: 'Productos Alquilados al mes',
    data: [2, 1, 0, 1, 2, 8, 5],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

this.char2=new Chart(this.chartAlquileres.nativeElement,{
  type:'line',
  data:data2
})

this.char2.resize(700,500)
  
  }
 

}
