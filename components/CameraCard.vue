<template>
    <button @click="showModal" class="flex flex-col min-w-64 w-min h-full shadow-md rounded-lg transition-all duration-200 translate-y-0 hover:shadow-lg border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-1">
        <div class="flex flex-col p-4 space-y-6 h-full">
            <div class="flex justify-start items-center w-full h-fit space-x-4">
                <div class="flex justify-center items-center p-1 bg-slate-200 dark:bg-slate-800 rounded-md p-1">
                    <UIcon name="i-heroicons-video-camera" size="32" />
                </div>
                <div class="flex flex-col justify-center items-start">
                    <h3> {{ camera.name }} </h3>
                </div>
            </div>
            <div class="flex justify-start">
                <p class="text-start"> {{ camera.name }} </p>
            </div>
        </div>
    </button>
    <UModal v-model="modalOpen">
        <ModalContent :title="camera.name" show-close-button v-on:close="modalOpen = false">
            <div>
                <p> {{ camera.name }} </p>
            </div>
            <div class="flex justify-end space-x-4">
                <UButton variant="solid" color="red" @click="onDeletePressed" icon="i-heroicons-trash"> {{ $t('verbs.delete') }} </UButton>
            </div>
        </ModalContent>
    </UModal>
    <UModal v-model="deleteOpen">
        <ModalContent :title="$t('home.camera.delete.title')" show-close-button v-on:close="deleteOpen = false">
            <div>
                <p> {{ $t('home.camera.delete.message', { name: camera.name }) }} </p>
            </div>
            <div class="flex justify-between space-x-4">
                <UButton variant="ghost" color="gray" @click="deleteOpen = false"> {{ $t('verbs.cancel') }} </UButton>
                <UButton variant="solid" color="red" @click="deleteCamera"> {{ $t('verbs.confirm') }} </UButton>
            </div>
        </ModalContent>
    </UModal>
</template>

<script lang="ts" setup>
import type Camera from '~/assets/types/Camera';

const props = defineProps<{
    camera: Camera;
}>();

const modalOpen = ref(false);
function showModal() {
    modalOpen.value = true;
}

const deleteOpen = ref(false);
function onDeletePressed() {
    deleteOpen.value = true;
}
function deleteCamera() {
    deleteOpen.value = false;
    modalOpen.value = false;
    // Delete camera
}
</script>
