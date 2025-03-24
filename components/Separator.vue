<template>
    <div class="px-4 px-8 py-4 py-8 px-2 px-16 py-2 py-16" v-if="false" />
    <div class="flex" :class="orientation === 'horizontal' ? ('w-full h-fit px-'+pad) : ('w-fit h-full py-'+pad)">
        <span class="bg-slate-200 dark:bg-slate-600 rounded-full" :class="orientation === 'horizontal' ? 'w-full h-1' : 'w-1 h-full'" />
    </div>
</template>

<script lang="ts" setup>
type OrientationType = 'horizontal' | 'vertical';
const props = defineProps<{
    orientation: OrientationType;
    padding?: string | number;
}>();
const pad = computed(() => "" + (props.padding ?? 4));
</script>
