import { 
	Engine, Scene, Light, Mesh, TransformNode, 
	Vector3, HemisphericLight, MeshBuilder, 
	ArcRotateCamera, StandardMaterial, Texture, 
	Color3
} from 'babylonjs';


export class BabylonScene {

	private canvas: HTMLCanvasElement;

	private engine: Engine;

	private scene: Scene;

	private camera: ArcRotateCamera;

	private light: Light;

	private earth: Mesh;

	private sat: Mesh;

	private pivot: TransformNode;

	constructor(canvasElement: string) {

		this.canvas = <HTMLCanvasElement>document.getElementById(canvasElement);

		// we link engine with canvas

		this.engine = new Engine(this.canvas, true);

		// if there is a browser resize

		window.addEventListener('resize', () => {

			this.engine.resize();

		});

	}



	createScene(): void {

		// scene creation 

		this.scene = new Scene(this.engine);



		// camera creation

		this.camera = new ArcRotateCamera('Camera', 0, 0, 50, BABYLON.Vector3.Zero(), this.scene);

		this.camera.position = new Vector3(0, 0, 0);

		this.camera.attachControl(this.canvas, false);



		// light creation

		this.light = new HemisphericLight('skyLight', new Vector3(1, 1, 0), this.scene);



		// add the Earth in the scene

		this.earth = MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 10 }, this.scene);

		this.earth.rotate(BABYLON.Axis.Z, -Math.PI, BABYLON.Space.WORLD);

		const earthMaterial = new StandardMaterial('sphere', this.scene);

		this.earth.position.y = 0;


		// add a satellite in the scene

		this.sat = MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 1 }, this.scene);

		const satMaterial = new StandardMaterial('sphere', this.scene);

		this.pivot = new BABYLON.TransformNode("root");
		this.pivot.position = new BABYLON.Vector3(0, 0, 0);

		this.sat.parent = this.pivot;

		this.sat.position = new BABYLON.Vector3(25, 0, 0); 


		// earth texture creation

		const earthTexture = new Texture('../../assets/img/earth.jpg', this.scene);

		earthMaterial.diffuseTexture = earthTexture;

		earthMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
		earthMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
		earthMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
		earthMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

		this.earth.material = earthMaterial;

		// satellite texture creation

		satMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
		satMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
		satMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0);
		satMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

		this.sat.material = satMaterial;

	}

	earthRotation(): void{
		this.earth.rotate(BABYLON.Axis.Y, -Math.PI/360/10, BABYLON.Space.WORLD);
	}

	satRotation(): void{
		

		let axis = new BABYLON.Vector3(2, 6, 4);
		this.pivot.rotate(axis, -Math.PI/360, BABYLON.Space.WORLD);
	}


	run(): void {

		// render loop

		this.engine.runRenderLoop(() => {

			this.earthRotation();

			this.satRotation();

			this.scene.render();

		});

	}

}
