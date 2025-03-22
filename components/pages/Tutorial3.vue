<template>
    <div class="flex w-full h-full justify-center items-center">
        <div class="flex flex-col w-fit h-fit p-8 space-y-16 max-w-3xl">
            <div class="show-up flex flex-col space-y-4 text-center">
                <h2 class="text-blue-500"> {{ $t('tutorial.step3.great') }} ✨ </h2>
                <h3 class="show-up text-center"> {{ $t('tutorial.step3.text1') }} </h3>
            </div>
            <p class="show-up text-center" style="animation-delay: .2s;">
                {{ $t('tutorial.step3.text2') }}
            </p>
            <div class="show-up flex items-end justify-between space-x-4" style="animation-delay: .4s;">
                <UButton variant="solid" color="gray" icon="i-heroicons-arrow-left" heading class="animate" @click="router.pop()"> {{ $t('tutorial.previous') }} </UButton>
                <UButton icon="i-heroicons-arrow-right" trailing class="animate" @click="finish"> {{ $t('tutorial.next') }} </UButton>
            </div>
            <div class="show-up text-center" style="animation-delay: .6s;">
                <UButton variant="link" color="gray" @click="skipTutorial"> {{ $t('tutorial.skip') }} </UButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const router = useCustomRouter();
const { t } = useI18n();
const constants = useConstants();

localStorage.setItem('tutorial', '3');
function skipTutorial() {
    localStorage.setItem('tutorial', 'done');
    router.push('/');
}

function finish() {
    localStorage.setItem('tutorial', 'done');
    router.push('/');
}

const imgSettings = {
    scene: new THREE.Scene(),
    center: new THREE.Vector3(0, .75, 0),
    angle: new THREE.Euler(-0.3, 0, 0),
    distance: 2,
};
const loader = new GLTFLoader();
loader.load('/models/tuto-1-guy.glb', (gltf) => {
    const material = new THREE.MeshStandardMaterial({ color: constants.PRIMARY_COLOR });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material;
        }
    });

    gltf.scene.rotation.set(0, 2.5*Math.PI/4, 0);
    gltf.scene.position.set(0.8, 0, -0.5);
    imgSettings.scene.add(gltf.scene);
});
const gridHelper = new THREE.GridHelper(10, 10);
imgSettings.scene.add(gridHelper);

</script>
