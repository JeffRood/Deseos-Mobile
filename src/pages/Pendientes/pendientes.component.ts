import { Component,OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/Services/Lista-Services';
import { NavController } from 'ionic-angular';
import { Agregarcomponent } from '../Agregar/Agregar.component';
import { detallecomponent } from '../Detalle/detalle.component';

@Component({
  selector:'app-pendientes',
  templateUrl:'pendientes.component.html'
})

export class pendientescomponent  implements OnInit{

  constructor(private servicios:ListaDeseosService,
                private nav:NavController){


  }

 ngOnInit() { }

 irAgregar(){
   this.nav.push(Agregarcomponent);


 }
 verDetalle(Lista,idx){
  this.nav.push(detallecomponent, {Lista,idx});

 }


}
