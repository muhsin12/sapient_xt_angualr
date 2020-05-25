/*
 *ngFor="let c of oneDimArray | sortBy:'asc'"
 *ngFor="let c of arrayOfObjects | sortBy:'asc':'propertyName'"
*/
import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import { Result } from '../model/rick.model';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {
    filteredArray: Result[];
    transform(value: any[], order: string): Result[] {
     this.filteredArray = value.sort(function (a, b) { return a.name - b.name });
     return this.filteredArray;

    }
}