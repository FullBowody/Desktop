<template>
    <div v-if="showing" class="flex flex-col grow min-h-full h-fit w-full justify-center items-center" :class="animation">
        <slot />
    </div>
</template>

<script lang="ts" setup>
const router = useCustomRouter();

const props = defineProps<{
    path: string;
}>();

const showing = ref(false);
const animation = ref('');

const ANIMATION_DURATION = 200;
function update() {
    const shouldShow = router.currentRoute.value.value === props.path;
    if (shouldShow === showing.value) return;

    if (shouldShow) animation.value = router.showAnimation.value;
    else animation.value = router.hideAnimation.value;

    setTimeout(() => {
        showing.value = shouldShow;
    }, ANIMATION_DURATION + (shouldShow ? 100 : 0));
}

watch(router.currentRoute.value, update);
update();
</script>
