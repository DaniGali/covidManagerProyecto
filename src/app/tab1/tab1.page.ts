import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlumnoModel } from './model/AlumnoModel';
import { AlumnoService } from './service/alumno.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  alumnos = [];
  textoBuscar = '';

  constructor(private router: Router, private alumnoService: AlumnoService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.cargarAlumnos();
  }

  ionViewWillEnter(){
    this.cargarAlumnos();
  }

  cargarAlumnos(){
    this.alumnoService.getAlumnos()
    .subscribe(data => {
      console.log(data)
      this.alumnos = data.content;
    })
  }

  async eliminarAlumno(id: string){
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
            this.alumnoService.deleteAlumno(id).subscribe(data => {
              this.cargarAlumnos();
            });
            this.router.navigate(['/alumnos']);
          }
        }
      ]
    });
    await alertElement.present();

  }

  anadirAlumno(){
    this.router.navigate(['/anadir-alumno'])
  }
  
  buscar(event){
    this.textoBuscar = event.detail.value;
  }

  doRefresh(event) {
    setTimeout(() => {
      this.cargarAlumnos();
      event.target.complete();
    }, 1000);
  }
}
