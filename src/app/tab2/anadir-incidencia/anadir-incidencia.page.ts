import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidenciaModel } from '../model/IncidenciaModel';
import { IncidenciaService } from '../service/incidencia.service';

@Component({
  selector: 'app-anadir-incidencia',
  templateUrl: './anadir-incidencia.page.html',
  styleUrls: ['./anadir-incidencia.page.scss'],
})
export class AnadirIncidenciaPage implements OnInit {

  incidencia: IncidenciaModel;

  constructor(private router: Router, private incidenciaService: IncidenciaService) {
    this.incidencia = new IncidenciaModel();
   }

  ngOnInit() {
  }

  addIncidencia(){
    this.incidenciaService.addIncidencia(this.incidencia).subscribe((response) => {
      this.incidencia=response;
    });
    this.router.navigate(['/incidencias']);
  }

}
