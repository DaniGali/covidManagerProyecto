import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirIncidenciaPageRoutingModule } from './anadir-incidencia-routing.module';

import { AnadirIncidenciaPage } from './anadir-incidencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirIncidenciaPageRoutingModule
  ],
  declarations: [AnadirIncidenciaPage]
})
export class AnadirIncidenciaPageModule {}
