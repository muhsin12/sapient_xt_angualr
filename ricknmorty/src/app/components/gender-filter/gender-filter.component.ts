import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gender-filter',
  templateUrl: './gender-filter.component.html',
  styleUrls: ['./gender-filter.component.css']
})
export class GenderFilterComponent implements OnInit {
  @Output() genderFilter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  doFilter(value) {
    this.genderFilter.emit(value)
  }

}
