<template>
    <div v-if="showing" class="flex flex-col grow min-h-full h-fit w-full justify-center items-center" :class="animation">
        <slot />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    name: string,
    current: string,
    animations: { show: string, hide: string }
}>();

const showing = ref(false);
const animation = ref('');

const ANIMATION_DURATION = 200;
function update() {
    const shouldShow = props.current === props.name;
    if (shouldShow === showing.value) return;

    if (shouldShow) animation.value = props.animations.show;
    else animation.value = props.animations.hide;

    setTimeout(() => {
        showing.value = shouldShow;
    }, ANIMATION_DURATION + (shouldShow ? 100 : 0));
}

watch(() => props.current, update);
update();
</script>
