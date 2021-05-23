import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router ,private alumnoService: AlumnoService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
    const recipeId = paramMap.get('alumnoId')
    this.alumnoService.getAlumno(recipeId).subscribe(alumno => this.alumno=alumno);
    })
  }

  async eliminarAlumno(){
    const alertElement = await this.alertCtrl.create({
      header: '¿Estas seguro que quieres eliminar el alumno?',
      message: 'Ten cuidado',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.alumnoService.deleteAlumno(this.alumno?.id);
            this.router.navigate(['/alumnos']);
          }
        }
      ]
    });
    await alertElement.present();

  }

  async updateAlumno(){
    const alertElement = await this.alertCtrl.create({
      header: '¿Estas seguro que quieres actualizar el alumno?',
      message: 'Ten cuidado',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Actualizar',
          handler: () => {
            this.alumnoService.putAlumno(this.alumno);
            this.router.navigate(['/alumnos']);
          }
        }
      ]
    });
    await alertElement.present();
  }
}
