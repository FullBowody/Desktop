<template>
    <div class="flex grow w-full h-full">
        <div class="flex flex-col w-fit h-full space-y-4 justify-start items-center p-2">
            <UButton variant="ghost" size="xl" color="gray" :padded="false" @click="router.push('/welcome')">
                <img src="~/assets/FBLogo-transparent.png" class="w-11 h-11 drop-shadow-lg p-0.5" alt="">
            </UButton>
            <SidebarButton :selected="tab === 'scene'" @click="changeTab('scene')" :name="t('home.scene.title')" icon="i-heroicons-cube-transparent"></SidebarButton>
            <SidebarButton :selected="tab === 'cameras'" @click="changeTab('cameras')" :name="t('home.cameras.title')" icon="i-heroicons-video-camera"></SidebarButton>
            <SidebarButton :selected="tab === 'listeners'" @click="changeTab('listeners')" :name="t('home.listeners.title')" icon="i-heroicons-signal"></SidebarButton>
            <SidebarButton :selected="tab === 'plugins'" @click="changeTab('plugins')" :name="t('home.plugins.title')" icon="i-heroicons-squares-plus"></SidebarButton>
            <SidebarButton :selected="tab === 'about'" @click="changeTab('about')" :name="t('home.about.title')" icon="i-heroicons-information-circle"></SidebarButton>
            <div class="flex flex-col grow justify-end items-center">
                <SidebarButton :selected="tab === 'settings'" @click="changeTab('settings')" :name="t('home.settings.title')" icon="i-heroicons-cog-6-tooth"></SidebarButton>
            </div>
        </div>
        <div class="py-2">
            <span class="flex h-full w-1 rounded-full bg-slate-200 dark:bg-slate-600" />
        </div>
        <div class="flex flex-col grow p-2">
            <HomeTab name="scene" :current="tab" :animations="animations">
                <TabsScene />
            </HomeTab>
            <HomeTab name="cameras" :current="tab" :animations="animations">
                <TabsCameras />
            </HomeTab>
            <HomeTab name="listeners" :current="tab" :animations="animations">
                <TabsListeners />
            </HomeTab>
            <HomeTab name="plugins" :current="tab" :animations="animations">
                <TabsPlugins />
            </HomeTab>
            <HomeTab name="about" :current="tab" :animations="animations">
                <TabsAbout />
            </HomeTab>
            <HomeTab name="settings" :current="tab" :animations="animations">
                <TabsSettings />
            </HomeTab>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const router = useCustomRouter();

const skipTutorial = localStorage.getItem('tutorial') === 'done';
if (!skipTutorial) router.push('/welcome');

const tabOrder = ['scene', 'cameras', 'listeners', 'plugins', 'about', 'settings'];
const tab = ref(tabOrder[0]);
const animations = {
    show: 'show-up',
    hide: 'hide-up'
}

function changeTab(name: string) {
    const oldTabIndex = tabOrder.indexOf(tab.value);
    tab.value = name;
    const newTabIndex = tabOrder.indexOf(name);

    if (oldTabIndex < newTabIndex) {
        animations.show = 'show-up';
        animations.hide = 'hide-up';
    } else {
        animations.show = 'show-down';
        animations.hide = 'hide-down';
    }
}
</script>
