import { ListaItem } from './Lista_Item';
export class Lista{
 nombre:string;
 terminado:boolean;
 Item:ListaItem[];

 constructor(nombre:string){
   this.nombre=nombre;
   this.terminado= false;


 }
}
