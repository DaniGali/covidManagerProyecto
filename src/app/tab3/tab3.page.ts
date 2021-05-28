import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActuacionService } from './service/actuacion.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  actuaciones= [];

  constructor(private router: Router, private actuacionService: ActuacionService, private alertCtrl: AlertController) {}

  ngOnInit(){
    this.cargarActuaciones()
  }

  ionViewWillEnter(){
    this.cargarActuaciones();
  }

  anadirActuacion(){
    this.router.navigate(['/anadir-actuacion'])
  }

  cargarActuaciones(){
    this.actuacionService.getActuaciones()
    .subscribe(data => {
      console.log(data)
      this.actuaciones = data;
    })
  }

  doRefresh(event) {
    setTimeout(() => {
      this.cargarActuaciones();
      event.target.complete();
    }, 1000);
  }

  async eliminarActuacion(id: string){
    const alertElement = await this.alertCtrl.create({
      header: '¿Estas seguro que quieres eliminar la actuacion?',
      message: 'Ten cuidado',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.actuacionService.deleteActuacion(id).subscribe(data => {
              this.cargarActuaciones();
            });
            this.router.navigate(['/actuaciones']);
          }
        }
      ]
    });
    await alertElement.present();

  }
}
