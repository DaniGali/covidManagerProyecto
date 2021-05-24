import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if(texto === ''){
      return arreglo;
    }
    texto=texto.toLowerCase();

    return arreglo.filter(item => {
      const nombre= item.nombre + ' ' + item.apellido1 + ' ' + item.apellido2;
      return nombre.toLowerCase().includes(texto);
    });
  }

}
