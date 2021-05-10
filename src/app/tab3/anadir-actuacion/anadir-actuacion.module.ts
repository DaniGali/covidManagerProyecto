import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirActuacionPageRoutingModule } from './anadir-actuacion-routing.module';

import { AnadirActuacionPage } from './anadir-actuacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirActuacionPageRoutingModule
  ],
  declarations: [AnadirActuacionPage]
})
export class AnadirActuacionPageModule {}
