import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'registro-auto',
    loadComponent: () => import('./pages/registro-auto/registro-auto.page').then( m => m.RegistroAutoPage)
  },
  {
    path: 'ver-auto',
    loadComponent: () => import('./pages/ver-auto/ver-auto.page').then( m => m.VerAutoPage)
  },
  {
    path: 'no-encontrado',
    loadComponent: () => import('./pages/no-encontrado/no-encontrado.page').then( m => m.NoEncontradoPage)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros.page').then( m => m.NosotrosPage)
  },
  {
    path: 'buscar-auto',
    loadComponent: () => import('./pages/buscar-auto/buscar-auto.page').then( m => m.BuscarAutoPage)
  },



];
