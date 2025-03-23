<template>
    <div class="relative flex flex-col grow w-full h-full">
        <canvas id="canvas" class="flex grow" />

        <div class="absolute top-0 right-0 p-2">
            <UButton icon="i-heroicons-plus" @click="onAddNewMarker">
                Ajouter un marqueur
            </UButton>
        </div>

        <div class="absolute bottom-0 right-0 left-0 p-2 flex justify-center">
            <UButton :icon="trackingButtonIcon" size="xl" @click="onTrackingPressed" :loading="trackingButtonLoading">
                {{ trackingButtonState ? 'Arrêter le suivi' : 'Commencer le suivi' }}
            </UButton>
        </div>
    </div>
    <UModal v-model="showNewMarkerModal">
        <div class="p-4 space-y-8">
            <h3>Ajouter un marqueur</h3>
            <div class="flex flex-col space-y-4">
                <UFormGroup label="ID du marqueur" class="flex space-x-4 justify-between items-center">
                    <UInput v-model="markerId" type="number" min="0" max="15" />
                </UFormGroup>
            </div>
            <UAlert class="show-up" color="red" variant="subtle" v-if="!markerIdValid"
                title="Marqueur déjà présent"
                description="Un marqueur avec cet ID est déjà présent dans la scène."
            />
            <div class="flex justify-between">
                <UButton variant="ghost" @click="showNewMarkerModal = false">Annuler</UButton>
                <UButton @click="addMarker" :disabled="!markerIdValid">Ajouter</UButton>
            </div>
        </div>
    </UModal>
</template>

<script lang="ts" setup>
import Scene from '~/assets/scripts/Scene';

const showNewMarkerModal = ref(false);
const markerId = ref(0);
const markerIdValid = computed(() => markerId.value !== 1);

function onAddNewMarker() {
    showNewMarkerModal.value = true;
}

function addMarker(id: number) {
    showNewMarkerModal.value = false;
    // Add marker to the scene
} 

const TRACKING_BUTTON_ICONS = {
    START: 'i-heroicons-rocket-launch',
    STOP: 'i-heroicons-no-symbol'
}
const trackingButtonIcon = ref(TRACKING_BUTTON_ICONS.START);
const trackingButtonLoading = ref(false);
const trackingButtonState = ref(false);
function onTrackingPressed() {
    trackingButtonLoading.value = true;
    setTimeout(() => {
        trackingButtonLoading.value = false;
        trackingButtonState.value = !trackingButtonState.value;
        trackingButtonIcon.value = trackingButtonState.value ? TRACKING_BUTTON_ICONS.STOP : TRACKING_BUTTON_ICONS.START;
    }, 500);
}

onMounted(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const scene = new Scene(canvas);
});

</script>
