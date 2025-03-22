<template>
    <div class="flex grow w-full h-full">
        <div class="flex flex-col w-fit h-full space-y-4 justify-start items-center p-2">
            <UButton variant="ghost" size="xl" color="gray" :padded="false" @click="router.push('/welcome')">
                <img src="~/assets/FBLogo-transparent.png" class="w-11 h-11 drop-shadow-lg p-0.5" alt="">
            </UButton>
            <SidebarButton :selected="tab === 'scene'" @click="tab = 'scene'" :name="t('home.scene.title')" icon="i-heroicons-cube-transparent"></SidebarButton>
            <SidebarButton :selected="tab === 'cameras'" @click="tab = 'cameras'" :name="t('home.cameras.title')" icon="i-heroicons-video-camera"></SidebarButton>
            <SidebarButton :selected="tab === 'listeners'" @click="tab = 'listeners'" :name="t('home.listeners.title')" icon="i-heroicons-signal"></SidebarButton>
            <SidebarButton :selected="tab === 'plugins'" @click="tab = 'plugins'" :name="t('home.plugins.title')" icon="i-heroicons-squares-plus"></SidebarButton>
            <div class="flex flex-col grow justify-end items-center">
                <SidebarButton :selected="tab === 'settings'" @click="tab = 'settings'" :name="t('home.settings.title')" icon="i-heroicons-cog-6-tooth"></SidebarButton>
            </div>
        </div>
        <div class="py-2">
            <span class="flex h-full w-1 rounded-full bg-slate-200 dark:bg-slate-600" />
        </div>
        <div class="flex flex-col p-4">
            <!-- content here -->
        </div>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const router = useCustomRouter();

const skipTutorial = localStorage.getItem('tutorial') === 'done';
if (!skipTutorial) router.push('/welcome');

let tab = ref('scene');
</script>
