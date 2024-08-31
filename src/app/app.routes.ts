import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { privadoGuard } from './guards/privado.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'privado', component:PrivadoComponent, canActivate:[privadoGuard]},
    { path: 'productos', component: ProductosComponent},
    { path: 'login', component: LoginComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: Error404Component}
];
