import * as THREE from 'three';

import {OrbitControls} from "three-orbitcontrols-ts";

export class ThreeScene {

	private domRenderer: HTMLElement;

	private scene: THREE.Scene;

	private anim: number;

	private camera: THREE.PerspectiveCamera;

	private height: number;

	private width: number;

	private webGLRenderer: THREE.WebGLRenderer;

	private ambient: THREE.AmbientLight;

	private directionalLight: THREE.DirectionalLight;

	private light :THREE.DirectionalLight;

	private earth: THREE.Mesh;

	private sat: THREE.Mesh;

	private pivot: THREE.Object3D;

	private controls: OrbitControls;

	constructor(domElement: string) {
		this.domRenderer = document.getElementById(domElement);
	}


	createScene(): void {

		// scene creation

		this.scene = new THREE.Scene();

		this.scene.name = "Scene";

		// camera creation

		this.height = this.domRenderer.clientHeight;
		this.width = this.domRenderer.clientWidth;

		const newCamera = new THREE.PerspectiveCamera(60, this.width/this.height, 1, 2000);
		this.camera = newCamera;
		this.camera.position.x = 100;
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));

		// create a renderer

		this.webGLRenderer = new THREE.WebGLRenderer();
		this.webGLRenderer.setClearColor(0xceeeff);
		this.webGLRenderer.setPixelRatio(window.devicePixelRatio);
		this.webGLRenderer.setSize(this.width, this.height);
		this.domRenderer.appendChild(this.webGLRenderer.domElement);


		// light creation
		
		this.ambient = new THREE.AmbientLight(0xffffff);
		this.scene.add(this.ambient);

		this.directionalLight = new THREE.DirectionalLight(0xffffff);
		this.directionalLight.position.set(100,100,100);
		this.scene.add(this.directionalLight);

		this.light = new THREE.DirectionalLight(0.002288);
		this.light.position.set(-100,-100,-100);
		this.scene.add(this.light);


		// add the Earth in the scene

		let earthGeometry = new THREE.SphereGeometry(10,16,16);
		
		let earthMaterial = new THREE.MeshStandardMaterial();
		earthMaterial.map = new THREE.TextureLoader().load("../../assets/img/earth.jpg");
		
		this.earth = new THREE.Mesh(earthGeometry, earthMaterial);
		this.scene.add(this.earth);

		// add a satellite
		let satGeometry = new THREE.SphereGeometry(1,16,16);
		
		let satMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
		
		this.sat = new THREE.Mesh(satGeometry, satMaterial);
		this.sat.position.x = 50;


		this.pivot = new THREE.Object3D();
		this.scene.add(this.pivot);

		this.pivot.add(this.sat);
		console.log(this.camera instanceof THREE.PerspectiveCamera);
		this.controls = new OrbitControls(this.camera, this.webGLRenderer.domElement);
		
		this.controls.enableZoom = true;
		this.controls.zoomSpeed = 1;
		this.controls.minZoom = 1;
		this.controls.maxZoom = 15;

		this.controls.maxDistance = Infinity;
		this.controls.minDistance = 0;

		this.controls.minPolarAngle = 0;
		this.controls.maxPolarAngle = Math.PI;

	}

	render(): void {
		this.webGLRenderer.render(this.scene, this.camera);
	}

	earthRotation(): void {
		this.earth.rotateY(Math.PI/360/10);
	}

	satRotation(): void {
		this.pivot.rotateOnAxis(new THREE.Vector3(2,6,4),Math.PI/360/10);
	}

	animate(): void {

		this.anim = requestAnimationFrame(this.animate.bind(this));

		this.earthRotation();
		this.satRotation();

		this.controls.update();

		this.render();

	}

}
