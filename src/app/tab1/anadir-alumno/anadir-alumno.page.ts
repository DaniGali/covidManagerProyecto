import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoModel } from '../model/AlumnoModel';
import { AlumnoService } from '../service/alumno.service';

@Component({
  selector: 'app-anadir-alumno',
  templateUrl: './anadir-alumno.page.html',
  styleUrls: ['./anadir-alumno.page.scss'],
})
export class AnadirAlumnoPage implements OnInit {

  alumno: AlumnoModel;

  constructor(private router: Router, private alumnoService: AlumnoService) {
    this.alumno = new AlumnoModel();
   }

  ngOnInit() {
    
  }

  addAlumno(){
    this.alumnoService.addAlumno(this.alumno).subscribe((response) => {
      this.router.navigate(['/alumnos']);
    });   
  }

}
