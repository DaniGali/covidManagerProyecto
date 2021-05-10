import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'alumnos',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: ':alumnoId',
            loadChildren: () => import('../tab1/alumno-perfil/alumno-perfil.module').then(m => m.AlumnoPerfilPageModule)
          }
        ]
        
      },
      {
        path: 'anadir-alumno',
        loadChildren: () => import('../tab1/anadir-alumno/anadir-alumno.module').then( m => m.AnadirAlumnoPageModule)
      },
      {
        path: 'incidencias',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'actuaciones',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: 'alumnos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'alumnos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
