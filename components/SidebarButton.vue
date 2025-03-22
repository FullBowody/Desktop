<template>
    <div class="relative">
        <UButton @click="triggerClick" :variant="selected? 'solid' : 'ghost'" size="xl" :color="selected? 'primary' : 'gray'" :icon="icon" heading></UButton>
        <div class="tooltip pointer-events-none absolute left-[100%] top-0 flex h-full justify-center items-center pl-2">
            <div class="rounded-md px-2 py-1 shadow-md bg-white dark:bg-slate-800">
                <p> {{ name }} </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    icon: string;
    name: string;
    selected?: boolean;
}>();

const emit = defineEmits<{
    (e: 'click', args: {}): void;
}>();

function triggerClick() {
    emit('click', {});
}
</script>

<style>

.tooltip {
    @apply scale-90 opacity-0 origin-left transition-transform;
    animation-timing-function: var(--easing);
    animation-duration: var(--timing);
}

.relative:hover .tooltip {
    @apply scale-100 opacity-100;
}

</style>