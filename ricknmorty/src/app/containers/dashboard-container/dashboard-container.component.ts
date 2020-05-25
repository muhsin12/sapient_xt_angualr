import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RickyInterface, Result, Tag } from '../../model/rick.model';
import { RickyDataState, rickyDataReducer } from '../../reducer/ricky.reducer';
import { GetRickyData, GetRickyDataSuccess } from '../../action/rick.action'
import { Observable, Subscription } from 'rxjs';
import { FilterPipe } from "../../pipes/filter.pipe";
import { SortByPipe } from "../../pipes/sort.pipe";
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {
  genderFilterValue: string;
  list$: Observable<any>;
  rickyArray: Result[];
  rickyArrayStore: Result[];
  tag: Tag;
  tags: Tag[];
  sortingValue:string='ASC';
  constructor(private store: Store<any>, private rickyFilter: FilterPipe, private sortPipe: SortByPipe) { }

  ngOnInit() {
    this.store.dispatch(new GetRickyData);
    this.list$ = this.store.select('ricky');

    setTimeout(() => {
      this.list$.subscribe(rickyData => {
        this.rickyArray = rickyData.data.results;
        this.rickyArrayStore = rickyData.data.results;
      });
    }, 1000);
  }

  genderFilter(value) {
    this.rickyArray = this.rickyFilter.transform(this.rickyArrayStore, 'gender', value);
  }

  specFilter(value) {
    this.rickyArray = this.rickyFilter.transform(this.rickyArrayStore, 'species', value);
  }
  sort(order) {
    // this.rickyArray = this.sortPipe.transform(this.rickyArrayStore,order);
  }

}
