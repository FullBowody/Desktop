<template>
    <div class="flex w-full h-full">
        <div class="flex flex-col grow w-full h-full p-8 space-y-8">
            <h2 class="show-up"> {{ $t('tutorial.step', {step: 2}) }} </h2>
            <div class="show-up flex flex-col space-y-4" style="animation-delay: .2s;">
                <p> {{ $t('tutorial.step2.text1') }} </p>
                <p> {{ $t('tutorial.step2.text2') }} </p>
            </div>
            <div class="show-up flex flex-col pt-8" style="animation-delay: .4s;">
                <p> {{ $t('tutorial.step2.text3') }} </p>
                <p v-html="t('tutorial.step2.text4', {
                    hrefapp: '<a href=\'https://fullbowody.com/app\' target=\'_blank\'>', nhrefapp: '</a>',
                    hrefcam: '<a href=\'https://fullbowody.com/cam\' target=\'_blank\'>', nhrefcam: '</a>'
                })"></p>
            </div>
            <div class="show-up flex grow items-end justify-between space-x-4" style="animation-delay: .6s;">
                <UButton variant="solid" color="gray" icon="i-heroicons-arrow-left" heading class="animate" @click="router.pop()"> {{ $t('tutorial.previous') }} </UButton>
                <UButton icon="i-heroicons-arrow-right" trailing class="animate" @click="router.push('/tutorial/3')"> {{ $t('tutorial.next') }} </UButton>
            </div>
            <div class="show-up" style="animation-delay: .8s;">
                <UButton variant="link" color="gray" @click="skipTutorial"> {{ $t('tutorial.skip') }} </UButton>
            </div>
        </div>
        <div class="show flex grow w-min h-full py-8">
            <span class="bg-slate-200 dark:bg-slate-600 rounded-full w-1 h-full" />
        </div>
        <div class="show-left flex flex-col grow w-full h-full p-8">
            <Img3D class="flex grow" :settings="imgSettings" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const router = useCustomRouter();
const { t } = useI18n();
const constants = useConstants();

localStorage.setItem('tutorial', '2');
function skipTutorial() {
    localStorage.setItem('tutorial', 'done');
    router.push('/');
}

const imgSettings = {
    scene: new THREE.Scene(),
    center: new THREE.Vector3(-0.2, 1.8, 0),
    angle: new THREE.Euler(0, -0.3, 0),
    distance: 2,
};
const loader = new GLTFLoader();
loader.load('/models/tuto-2-guy.glb', (gltf) => {
    const material = new THREE.MeshStandardMaterial({ color: constants.PRIMARY_COLOR });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material;
        }
    });

    gltf.scene.rotation.set(0, -0.5*Math.PI/2, 0);
    gltf.scene.position.set(-0.8, 0, 0.5);
    imgSettings.scene.add(gltf.scene);
});
const gridHelper = new THREE.GridHelper(10, 10);
imgSettings.scene.add(gridHelper);

</script>
