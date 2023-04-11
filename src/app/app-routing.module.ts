

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',

  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-empleados',
    loadChildren: () => import('./registro-empleados/registro-empleados.module').then( m => m.RegistroEmpleadosPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'registro-proyectos',
    loadChildren: () => import('./registro-proyectos/registro-proyectos.module').then( m => m.RegistroProyectosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'resumen-proyecto',
    loadChildren: () => import('./resumen-proyecto/resumen-proyecto.module').then( m => m.ResumenProyectoPageModule)
  },  {
    path: 'nombre-de-la-tarea',
    loadChildren: () => import('./nombre-de-la-tarea/nombre-de-la-tarea.module').then( m => m.NombreDeLaTareaPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

