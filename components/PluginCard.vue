<template>
    <button @click="showModal" class="flex flex-col min-w-64 w-min h-full shadow-md rounded-lg transition-all duration-200 translate-y-0 hover:shadow-lg border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-1">
        <div class="flex flex-col p-4 space-y-6 h-full">
            <div class="flex justify-start items-center w-full h-fit space-x-4">
                <div class="flex justify-center items-center p-1 bg-slate-200 dark:bg-slate-800 rounded-md p-1">
                    <UIcon name="i-heroicons-puzzle-piece" size="32" />
                </div>
                <div class="flex flex-col justify-center items-start">
                    <h3> {{ plugin.name }} </h3>
                    <p class="text-sm"> Version {{ plugin.version }} </p>
                </div>
            </div>
            <div class="flex justify-start">
                <p class="text-start"> {{ plugin.description }} </p>
            </div>
            <div class="flex grow justify-between items-end space-x-2">
                <div>
                    <p class="font-semibold"> {{ plugin.author }} </p>
                </div>
                <div v-show="plugin.default" class="w-fit h-fit bg-blue-500/[0.1] dark:bg-blue-500/[0.1] rounded-full px-2 border border-blue-500/[0.5] dark:border-blue-500/[0.5]">
                    <p class="text-xs text-blue-500 dark:text-blue-400"> {{ $t('home.plugins.default') }} </p>
                </div>
            </div>
        </div>
    </button>
    <UModal v-model="modalOpen">
        <ModalContent :title="plugin.name" show-close-button v-on:close="modalOpen = false">
            <div>
                <p> {{ plugin.description }} </p>
            </div>
            <div>
                <UButton variant="ghost" color="gray" @click="openPluginFolder" icon="i-heroicons-folder"> {{ $t('home.plugins.openPluginFolder') }} </UButton>
            </div>
            <div class="flex justify-end space-x-4">
                <UButton variant="solid" color="red" @click="onDeletePressed" icon="i-heroicons-trash"> {{ $t('verbs.delete') }} </UButton>
            </div>
        </ModalContent>
    </UModal>
    <UModal v-model="deleteOpen">
        <ModalContent :title="$t('home.plugins.delete.title')" show-close-button v-on:close="deleteOpen = false">
            <div>
                <p> {{ $t('home.plugins.delete.message', { name: plugin.name }) }} </p>
            </div>
            <div class="flex justify-between space-x-4">
                <UButton variant="ghost" color="gray" @click="deleteOpen = false"> {{ $t('verbs.cancel') }} </UButton>
                <UButton variant="solid" color="red" @click="deletePlugin"> {{ $t('verbs.confirm') }} </UButton>
            </div>
        </ModalContent>
    </UModal>
</template>

<script lang="ts" setup>
import type Plugin from '~/assets/types/Plugin';

const props = defineProps<{
    plugin: Plugin;
}>();

const modalOpen = ref(false);
function showModal() {
    modalOpen.value = true;
}

function openPluginFolder() {
    // Open plugin folder
}

const deleteOpen = ref(false);
function onDeletePressed() {
    deleteOpen.value = true;
}
function deletePlugin() {
    deleteOpen.value = false;
    modalOpen.value = false;
    // Delete plugin
}
</script>
