import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'alumno-perfil',
    loadChildren: () => import('./alumno-perfil/alumno-perfil.module').then( m => m.AlumnoPerfilPageModule)
  },
  {
    path: 'anadir-alumno',
    loadChildren: () => import('./anadir-alumno/anadir-alumno.module').then( m => m.AnadirAlumnoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
