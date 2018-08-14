import { Component, OnInit } from '@angular/core';

import { ThreeScene } from '../three-scene';

@Component({
  selector: 'app-proto-three',
  templateUrl: './proto-three.component.html',
  styleUrls: ['./proto-three.component.css']
})
export class ProtoThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	const game = new ThreeScene("renderDiv");

  	game.createScene();

  	game.animate();
  }


}
