import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private alumnos = [
    {
      id: '1',
      nombre: 'daniel',
      apellido: 'Galilea'
    },
    {
      id: '2',
      nombre: 'pepe',
      apellido: 'pepito'
    }
  ]

  constructor(private router: Router) {}


  anadirAlumno(){
    this.router.navigate(['/anadir-alumno'])
  }
}
