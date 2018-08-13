import { Component, OnInit } from '@angular/core';
import {ProtoSat} from '../proto-sat';
import {Coordinates} from '../coordinates';

@Component({
  selector: 'app-proto-sat-list',
  templateUrl: './proto-sat-list.component.html',
  styleUrls: ['./proto-sat-list.component.css']
})
export class ProtoSatListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sat1 : ProtoSat = {
  	id: 1,
  	name: 'NEO',
  	position : new Coordinates(1,5,2),
  };

}
