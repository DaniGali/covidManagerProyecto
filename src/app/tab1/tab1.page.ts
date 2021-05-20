import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from './service/alumno.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  alumnos = [];

  constructor(private router: Router, private alumnoService: AlumnoService) {}

  ngOnInit() {
    this.alumnoService.getAlumnos()
    .subscribe(data => {
      console.log(data)
      this.alumnos = data.content;
    })
  }

  anadirAlumno(){
    this.router.navigate(['/anadir-alumno'])
  }

  eliminarAlumno(){
    console.log("A")
  }
}
