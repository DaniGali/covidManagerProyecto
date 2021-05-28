import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActuacionModel } from '../model/ActuacionModel';
import { ActuacionService } from '../service/actuacion.service';

@Component({
  selector: 'app-anadir-actuacion',
  templateUrl: './anadir-actuacion.page.html',
  styleUrls: ['./anadir-actuacion.page.scss'],
})
export class AnadirActuacionPage implements OnInit {

  actuacion: ActuacionModel;

  constructor(private router:Router, private actuacionService: ActuacionService) { 
    this.actuacion = new ActuacionModel();
  }

  ngOnInit() {
  }

  addActuacion(id: string){
    this.actuacionService.addActuacion(this.actuacion, id).subscribe((response) => {
      this.actuacion=response;
    });
    this.router.navigate(['/actuaciones']);
  }

}
