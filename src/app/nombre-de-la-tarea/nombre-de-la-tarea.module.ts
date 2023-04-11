import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NombreDeLaTareaPageRoutingModule } from './nombre-de-la-tarea-routing.module';

import { NombreDeLaTareaPage } from './nombre-de-la-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NombreDeLaTareaPageRoutingModule
  ],
  declarations: [NombreDeLaTareaPage]
})
export class NombreDeLaTareaPageModule {}
