import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IncidenciaService } from './service/incidencia.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  incidencias= [];

  constructor(private router: Router, private incidenciaService: IncidenciaService, private alertCtrl: AlertController) {}

  ngOnInit(){
    this.cargarIncidencias();
  }

  ionViewWillEnter(){
    this.cargarIncidencias();
  }

  anadirIncidencia(){
    this.router.navigate(['/anadir-incidencia'])
  }

  cargarIncidencias(){
    this.incidenciaService.getIncidencias()
    .subscribe(data => {
      console.log(data)
      this.incidencias = data.content;
    })
  }

  doRefresh(event) {
    setTimeout(() => {
      this.cargarIncidencias();
      event.target.complete();
    }, 1000);
  }

  async eliminarIncidencia(id: string){
    const alertElement = await this.alertCtrl.create({
      header: '¿Estas seguro que quieres eliminar la incidencia?',
      message: 'Ten cuidado',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.incidenciaService.deleteIncidencia(id).subscribe(data => {
              this.cargarIncidencias();
            });
            this.router.navigate(['/incidencias']);
          }
        }
      ]
    });
    await alertElement.present();

  }
}
