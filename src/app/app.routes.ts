import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogueadoComponent } from './pages/logueado/logueado.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Biblioteca'
    },
    {
        path:'login',
        component:LoginComponent,
        title:'login'
    },
    {
        path:'dashboard',
        component:LogueadoComponent,
        title:'Dashboard'
    }
];
