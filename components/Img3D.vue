<template>
    <div class="rounded-lg">
        <canvas ref="canvas" class="w-full h-full" />
    </div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';

const props = defineProps<{
    settings: {
        scene: THREE.Scene;
        deviation?: number;
        center?: THREE.Vector3;
        distance?: number;
        angle?: THREE.Euler;
        smoothness?: number;
    }
}>();

const scene = props.settings.scene;
const deviation = props.settings.deviation || 0.05;
const center = props.settings.center || new THREE.Vector3(0, 0, 0);
const distance = props.settings.distance || 1;
const angle = props.settings.angle || new THREE.Euler(0, 0, 0);
const smoothness = props.settings.smoothness || 1;

const canvas = ref<HTMLCanvasElement | null>(null);
const renderer = ref<THREE.WebGLRenderer | null>(null);
const camera = ref<THREE.PerspectiveCamera | null>(null);

onMounted(() => {
    if (!canvas.value) return;

    const rendererInstance = new THREE.WebGLRenderer({
        canvas: canvas.value,
        antialias: true,
        alpha: true,
    });
    rendererInstance.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
    rendererInstance.setClearColor(0x000000, 0);

    const cameraAnchor = new THREE.Object3D();
    cameraAnchor.position.set(center.x, center.y, center.z);
    scene.add(cameraAnchor);

    const camRotation = new THREE.Object3D();
    camRotation.rotation.copy(angle);
    cameraAnchor.add(camRotation);

    const cameraInstance = new THREE.PerspectiveCamera(75, canvas.value.clientWidth / canvas.value.clientHeight, 0.1, 1000);
    cameraInstance.position.set(0, 0, distance);
    camRotation.add(cameraInstance);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    renderer.value = rendererInstance;
    camera.value = cameraInstance;

    // canvas.value.addEventListener('resize', () => {
    //     if (!canvas.value) return;
    //     rendererInstance.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
    //     cameraInstance.aspect = canvas.value.clientWidth / canvas.value.clientHeight;
    //     cameraInstance.updateProjectionMatrix();
    // });

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    window.addEventListener('mousemove', (event) => {
        targetX = (event.clientY / window.innerHeight) * 2 - 1;
        targetY = (event.clientX / window.innerWidth) * 2 - 1;
    });

    const lerp = (start: number, end: number, t: number) => {
        return start * (1 - t) + end * t;
    };

    let lastTime = Date.now();
    const animate = () => {
        const now = Date.now();
        const deltaTime = Math.min(now - lastTime, 100);
        lastTime = now;

        currentX = lerp(currentX, targetX, deltaTime / (smoothness * 100));
        currentY = lerp(currentY, targetY, deltaTime / (smoothness * 100));
        cameraAnchor.rotation.x = currentX * deviation;
        cameraAnchor.rotation.y = currentY * deviation;

        rendererInstance.render(scene, cameraInstance);
        requestAnimationFrame(animate);
    };

    animate();
});

</script>
