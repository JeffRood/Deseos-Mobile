import { Injectable } from '@angular/core';
import { Lista } from '../Clases/Lista';
import { List } from 'ionic-angular';
@Injectable()
export class ListaDeseosService {
  lista:Lista[] = [];
constructor(){

this.CargarData();
console.log("Servicio inicializado!!");

}

ActualizarData(){
  localStorage.setItem( "data", JSON.stringify(this.lista));

}

CargarData(){
  if(localStorage.getItem("data"))
 this.lista= JSON.parse( localStorage.getItem("data")) ;
}

AgregarLista(lista:Lista){
this.lista.push(lista);
this.ActualizarData();
}
EliminarLista(idx:number){
  this.lista.splice(idx);
  this.ActualizarData();
  }


}
