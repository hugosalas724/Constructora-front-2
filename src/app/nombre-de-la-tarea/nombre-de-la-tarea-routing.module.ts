import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NombreDeLaTareaPage } from './nombre-de-la-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: NombreDeLaTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NombreDeLaTareaPageRoutingModule {}
