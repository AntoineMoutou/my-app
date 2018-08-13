export class Coordinates {
	public x: number;
	public y: number;
	public z: number;

	public constructor(x: number, y: number, z: number){
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public show(){
		return "( " + this.x + ", " + this.y + ", " + this.z + " )";
	}
}
