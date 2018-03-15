import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../Clases/Lista';


@Pipe({name: 'Pendientes',
        pure:false})
export class PendientesPipe implements PipeTransform {
  transform(Lista: Lista[], completa:boolean=false): Lista[] {

    let nuevaLista: Lista[] = [];

    for(let lista of Lista){
   if( lista.terminado == completa){
     nuevaLista.push(lista);
   }

    }

    return nuevaLista;
  }
}
