import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tables',
  standalone: true
})
export class TablesPipe implements PipeTransform {

  transform(value: unknown, ...args: any[]): any
  {
   
    return args[0] * args[1];
  }

}
