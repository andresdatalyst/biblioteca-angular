import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miFiltro'
})
export class MiFiltroPipe implements PipeTransform {

  transform(items: any[], keyword: any, properties: string[]): any[] {
    if (!items) return [];
    if (!keyword) return items;
    return items.filter(item => {
      var itemFound: Boolean = false;
      for (let i = 0; i < properties.length; i++) {
        if (item[properties[i]].Tol !== -1) {
          itemFound = true;
          break;
        }
      }
      return itemFound;
    });

  }

}
