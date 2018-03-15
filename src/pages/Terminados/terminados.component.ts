import { Component,OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/Services/Lista-Services';
import { NavController } from 'ionic-angular';
import { detallecomponent } from '../Detalle/detalle.component';
@Component({
  selector:'app-terminados',
  templateUrl:'terminados.component.html',
})

export class terminadoscomponent  implements OnInit{

  constructor(private servicios:ListaDeseosService,
    private nav:NavController){}

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.

 }
 verDetalle(Lista,idx){
  this.nav.push(detallecomponent, {Lista,idx});

 }
}
