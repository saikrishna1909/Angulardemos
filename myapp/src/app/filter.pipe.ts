import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filteredStatus:string,prop:string): any {
    const result=[]
    console.log(value)
    for(let item of value){
    if(item[prop]===filteredStatus){
      result.push(item)
    }
  }
    return result
  }

}
