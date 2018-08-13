import { Component, OnInit } from '@angular/core';
import {BabylonScene} from '../babylon-scene';

@Component({
  selector: 'app-proto-babylon',
  templateUrl: './proto-babylon.component.html',
  styleUrls: ['./proto-babylon.component.css']
})
export class ProtoBabylonComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	// Create our game class using the render canvas element

		const game = new BabylonScene('renderCanvas');



		// Create the scene

		game.createScene();



		// start animation

		game.run();

	}
}
