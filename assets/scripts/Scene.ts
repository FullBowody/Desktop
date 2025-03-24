import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';

class Scene {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;

    constructor(canvas: HTMLCanvasElement) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.update();
        this.controls.enableDamping = true;
        
        const gridHelper = new THREE.GridHelper(20, 20);
        this.scene.add(gridHelper);

        const axesHelper = new THREE.AxesHelper(1);
        axesHelper.position.y = 0.001
        this.scene.add(axesHelper);
        
        this.camera.position.z = 5;
        this.camera.position.y = 5;
        this.camera.position.x = 5;
        this.camera.lookAt(0, 0, 0);

        this.render = this.render.bind(this);
        requestAnimationFrame(this.render);
    }

    render() {
        this.controls.update();

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render);
    }
}

export default Scene;