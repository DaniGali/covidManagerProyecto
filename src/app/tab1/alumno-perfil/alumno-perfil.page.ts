import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlumnoModel } from '../model/AlumnoModel';
import { AlumnoService } from '../service/alumno.service';

@Component({
  selector: 'app-alumno-perfil',
  templateUrl: './alumno-perfil.page.html',
  styleUrls: ['./alumno-perfil.page.scss'],
})
export class AlumnoPerfilPage implements OnInit {

  form: any = {};
  actualizado = false;
  recipeId: string;
  ultimoDia: Date = new Date();

  constructor(private activatedRoute: ActivatedRoute, private router: Router ,private alumnoService: AlumnoService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
    this.recipeId = paramMap.get('alumnoId')
    this.alumnoService.getAlumno(this.recipeId).subscribe(data => {
      this.form.identificador = this.recipeId;
      this.form.nombre = data.nombre;
      this.form.apellido1 = data.apellido1;
      this.form.apellido2 = data.apellido2;
      this.form.dni = data.dni;
      this.form.direccion = data.direccion;
      this.form.telefono = data.telefono;
      this.form.responsables = data.responsables;
      this.form.alergias = data.datosMedicos?.alergias;
    });
    console.log(this.form);
    })

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
            this.alumnoService.putAlumno(this.form).subscribe(data => {
              this.actualizado = true;
            });
            this.router.navigate(['/alumnos']);
          }
        }
      ]
    });
    await alertElement.present();
  }

}
