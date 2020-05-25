import { Component, OnInit, Input } from '@angular/core';
import { Result} from '../../model/rick.model'

@Component({
  selector: 'app-ricky-tile',
  templateUrl: './ricky-tile.component.html',
  styleUrls: ['./ricky-tile.component.css']
})
export class RickyTileComponent implements OnInit {
@Input()item :Result;
  constructor() { }

  ngOnInit() {
  }

}
