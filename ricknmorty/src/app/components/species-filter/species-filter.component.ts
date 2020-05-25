import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-species-filter',
  templateUrl: './species-filter.component.html',
  styleUrls: ['./species-filter.component.css']
})
export class SpeciesFilterComponent implements OnInit {
  @Output() specFilter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  doFilter(value) {
    this.specFilter.emit(value)
  }

}
