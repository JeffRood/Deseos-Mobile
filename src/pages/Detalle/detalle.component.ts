import { Component,OnInit } from '@angular/core';
import { NavController, NavParams, Item } from 'ionic-angular';
import { ListaItem } from '../../app/Clases/Lista_Item';
import { Lista } from '../../app/Clases/Lista';
import { ListaDeseosService } from '../../app/Services/Lista-Services';
import { AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { NgForOf } from '@angular/common';


@Component({
  selector:'app-detalle',
  templateUrl:'detalle.component.html',
})

export class detallecomponent  implements OnInit{

idx:number;
Lista:Lista;

  constructor( public controler:NavController,
                public parametro:NavParams,
                public deseos:ListaDeseosService,
              public alertCtrl:AlertController){

                    this.idx=this.parametro.get("idx");
                    this.Lista=this.parametro.get("Lista");


                              }

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.

 }

 Actualizar(item:ListaItem){

  item.completa = !item.completa;
   let TodosMarcado = true;
   for (let item of this.Lista.Item) {
     if(!item.completa){
       TodosMarcado=false;
       break;
     }

   }
this.Lista.terminado=TodosMarcado;


  this.deseos.ActualizarData();

 }

 BorrarItem(){
  let confirm = this.alertCtrl.create({
    title: this.Lista.nombre,
    message: 'Ud ta claro que ta borrando vd',
    buttons: [ 'Cancelar',
      {
        text: 'cancelaaa'
      },
      {
        text: 'Dale paya',
        handler: () => {
            this.deseos.EliminarLista(this.idx);
            this.controler.pop();
        }
      }
    ]
  });
  confirm.present();
}

 }

