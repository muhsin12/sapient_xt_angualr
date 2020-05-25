import { Pipe, PipeTransform } from '@angular/core';
import { Result, Tag } from "../model/rick.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  filteredArray: Result[];
  transform(rickyArray: Result[], attribute: string, value: string): Result[] {
    if (!rickyArray) return [];
    if (!attribute) return rickyArray;
    this.filteredArray = rickyArray.filter(item => { return item[attribute] === value; });
    return this.filteredArray;
  }

}
