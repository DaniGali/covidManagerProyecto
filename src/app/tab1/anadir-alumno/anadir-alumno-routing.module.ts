import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirAlumnoPage } from './anadir-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirAlumnoPageRoutingModule {}
