import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Placeholden'})
export class placeholdenPipe implements PipeTransform {
  transform(value: string, defecto:string): string {
  return( value )? value: defecto;
  }
}
