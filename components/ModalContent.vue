<template>
    <UButton v-if="showCloseButton" @click="onClose" color="red" variant="ghost" :padded="false" class="z-50 absolute top-4 right-4 p-2">
        <UIcon name="i-heroicons-x-mark" size="16" />
    </UButton>
    <div class="p-4 space-y-8">
        <h3> {{ title }} </h3>
        <div class="flex flex-col w-fit h-fit min-w-full min-h-full space-y-8">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    title: string;
    showCloseButton?: boolean;
}>();
const emit = defineEmits<{
    (e: 'close'): void;
}>();
function onClose() {
    emit('close');
}
</script>
