import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirIncidenciaPage } from './anadir-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirIncidenciaPageRoutingModule {}
