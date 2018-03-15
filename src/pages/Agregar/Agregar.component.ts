import { Component,OnInit } from '@angular/core';
 import { ListaItem } from '../../app/Clases/Lista_Item';
 import { Lista } from '../../app/Clases/Lista';
 import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/Services/Lista-Services';


@Component({
  selector:'app-agregar',
  templateUrl:'Agregar.component.html'
})

export class Agregarcomponent  implements OnInit{
  nombreLista:string = "";
nombreItem:string = "";
items:ListaItem[]= [];


  constructor(private alertCtrl:AlertController,
              private servicios: ListaDeseosService,
              private nav: NavController
  ){


  }

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.

 }
agregar(){
if(this.nombreItem.length == 0 ){
  return;
}
let item = new ListaItem();
item.nombre = this.nombreItem;
this.items.push(item);
this.nombreItem= "";

}
Eliminar(item){
  //let index = this.items.indexOf(item);

      this.items.splice(item,1);

  //this.items.splice(0,item);
}
agregarlista(){
if(this.nombreLista.length == 0){
  let alert = this.alertCtrl.create({
    title: 'Nombre de la lista necesario',
    subTitle: 'El nombre de la lista pongaselo',
    buttons: ['OK']
  });
    alert.present();
  return;
}

let lista = new Lista (this.nombreLista);
lista.Item= this.items;
// this.servicios.lista.push(lista);
this.servicios.AgregarLista(lista);
this.nav.pop();
}

}
