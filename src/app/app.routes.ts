import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogueadoComponent } from './pages/logueado/logueado.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AlquileresComponent } from './pages/alquileres/alquileres.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { authGuard } from './guards/auth.guard';
import { CuentaComponent } from './pages/cuenta/cuenta/cuenta.component';

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
        title:'Dashboard',
        canActivate:[authGuard]
    },
    {
        path:'productos',
        component:ProductosComponent,
        title:'Productos',
        canActivate:[authGuard]
    },
    {
        path:'alquileres',
        component:AlquileresComponent,
        title:'Alquileres',
        canActivate:[authGuard]
    },
    {
        path:'registro',
        component:RegistroComponent,
        title:'Registro'
    },
    {
        path:'cuenta',
        component:CuentaComponent,
        title:'Cuenta'
    }
];
