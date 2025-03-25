<template>
    <div class="relative flex flex-col grow w-full h-full p-2">
        <div class="flex justify-between items-start">
            <h3> {{ $t('home.cameras.title') }} </h3>
            <UButton icon="i-heroicons-plus" variant="soft" @click="onAddCameraPressed"> {{ $t('home.cameras.addCamera.title') }} </UButton>
        </div>
        <div class="flex flex-wrap h-min">
            <div v-for="camera in cameras" :key="camera.id" class="show-up m-2 h-full">
                <CameraCard :camera="camera" />
            </div>
        </div>
    </div>
    <UModal v-model="modalOpen">
        <ModalContent :title="$t('home.cameras.addCamera.title')">
            <div class="flex flex-col space-y-4">
                <UFormGroup :label="$t('home.cameras.addCamera.name')" class="flex space-x-4 justify-between items-center">
                    <UInput v-model="cameraName" />
                </UFormGroup>
            </div>
            <div class="flex justify-between">
                <UButton variant="ghost" color="gray" @click="modalOpen = false"> {{ $t('verbs.cancel') }} </UButton>
                <UButton @click="addCamera"> {{ $t('verbs.add') }} </UButton>
            </div>
        </ModalContent>
    </UModal>
</template>

<script lang="ts" setup>
const modalOpen = ref(false);
function onAddCameraPressed() {
    modalOpen.value = true;
    cameraName.value = '';
}

const cameraName = ref('');
function addCamera() {
    modalOpen.value = false;
    // Add camera
}

const cameras = ref([
    {
        id: 1,
        name: 'Camera 1',
    },
    {
        id: 2,
        name: 'Camera 2',
    },
    {
        id: 3,
        name: 'Camera 3',
    },
]);
</script>
