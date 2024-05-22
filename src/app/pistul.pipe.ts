import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pistul',
  standalone: true
})
export class PistulPipe implements PipeTransform {

  transform(no1 : any, no2 : any): any
  {
   
    return no1 + no2;
  }

}
