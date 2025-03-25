<template>
    <div class="relative flex flex-col grow w-full h-full p-2">
        <div class="flex justify-between items-start">
            <h3> {{ $t('home.plugins.title') }} </h3>
            <UButton icon="i-heroicons-folder" variant="soft" @click="openPluginsFolder"> {{ $t('home.plugins.openPluginsFolder') }} </UButton>
        </div>
        <div class="flex flex-wrap h-min">
            <div v-for="plugin in plugins" :key="plugin.id" class="show-up m-2 h-full">
                <PluginCard :plugin="plugin" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type Plugin from '~/assets/types/Plugin';

const plugins = ref<Plugin[]>([
    {
        default: true,
        id: 1,
        name: 'WebcamTracker',
        description: 'Body tracker from RGB cameras (like webcams), using Google\'s MoveNet model.',
        author: 'FullBowody',
        version: '0.1.0',
    },
    {
        default: true,
        id: 2,
        name: 'AppTracker',
        description: 'Body tracker from the FullBowody mobile app, using on-device Google\'s MoveNet model.',
        author: 'FullBowody',
        version: '0.1.0',
    }
]);

function openPluginsFolder() {
    // Open the plugins folder
}
</script>
