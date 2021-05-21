import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumnoModel } from '../model/AlumnoModel';
import { AlumnoService } from '../service/alumno.service';

@Component({
  selector: 'app-alumno-perfil',
  templateUrl: './alumno-perfil.page.html',
  styleUrls: ['./alumno-perfil.page.scss'],
})
export class AlumnoPerfilPage implements OnInit {

  alumno: AlumnoModel;

  constructor(private activatedRoute: ActivatedRoute, private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
    const recipeId = paramMap.get('alumnoId')
    this.alumnoService.getAlumno(recipeId).subscribe(alumno => this.alumno=alumno);
    })
  }

  eliminarAlumno(){
    this.alumnoService.deleteAlumno(this.alumno?.id);
  }
}
