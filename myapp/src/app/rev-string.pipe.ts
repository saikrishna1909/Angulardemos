import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revString'
})
export class RevStringPipe implements PipeTransform {

  transform(value:any): any {
    
    return value.split("").reverse().join('')
  }

}
