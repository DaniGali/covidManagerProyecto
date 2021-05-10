import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirAlumnoPageRoutingModule } from './anadir-alumno-routing.module';

import { AnadirAlumnoPage } from './anadir-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirAlumnoPageRoutingModule
  ],
  declarations: [AnadirAlumnoPage]
})
export class AnadirAlumnoPageModule {}
