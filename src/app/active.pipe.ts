import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    return values.filter((item) => item.active  === '1');
  }

}
