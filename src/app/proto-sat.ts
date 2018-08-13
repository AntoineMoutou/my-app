import { Coordinates } from './coordinates'

export class ProtoSat {
	public id: number;
	public name: string;
	public position: Coordinates; //the position of the barycenter

	public constructor(id: number, name: string, position: Coordinates){
		this.id = id;
		this.name = name;
		this.position = position;
	}

}
