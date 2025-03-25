<template>
    <div class="relative flex flex-col grow w-full h-full space-y-2">
        <div class="show-down flex h-fit w-full justify-center items-center">
            <div class="flex flex-col space-y-4 grow h-fit p-2">
                <h3> {{ $t('home.listeners.server') }} </h3>
                <div class="flex flex-col space-y-4 w-fit pl-4">
                    <div class="show-down flex space-x-4 items-center justify-between w-full" style="animation-delay: .1s;">
                        <p> {{ $t('home.listeners.address') }} </p>
                        <div class="code">
                            <p> 192.168.1.52 </p>
                        </div>
                    </div>
                    <div class="show-down flex space-x-4 items-center justify-between w-full" style="animation-delay: .2s;">
                        <p> {{ $t('home.listeners.port') }} </p>
                        <div class="code">
                            <p> 5621 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="show-down flex flex-col h-fit w-48 space-y-4 pr-4">
                <div class="flex space-x-4 items-center justify-between w-full">
                    <p> {{ $t('home.listeners.status.title') }} </p>
                    <div class="code">
                        <p> {{ $t('home.listeners.status.'+serverInfos.status) }} </p>
                    </div>
                </div>
                <div class="flex w-full justify-start">
                    <UButton @click="onServerButtonPressed" :loading="serverButtonLoading" :icon="serverButtonIcon">
                        {{ (serverInfos.status === SERVER_STATUS.RUNNING || serverInfos.status === SERVER_STATUS.STOPPING) ? $t('verbs.stop') : $t('verbs.start') }}
                    </UButton>
                </div>
            </div>
        </div>
        <Separator orientation="horizontal" class="show" />
        <div class="show-up flex flex-col grow p-2 space-y-2">
            <h3> {{ $t('home.listeners.title') }} </h3>
            <div class="flex grow justify-center items-center">
                <div class="show-up flex flex-col max-w-64 justify-center items-center space-y-2">
                    <h3 class="text-center text-slate-600 dark:text-slate-200"> {{ $t('home.listeners.noListener') }} </h3>
                    <p class="show-up text-center text-slate-600 dark:text-slate-200"> {{ $t('home.listeners.noListenerMessage') }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const SERVER_STATUS = {
    STOPPED: 'stopped',
    STARTING: 'starting',
    RUNNING: 'running',
    STOPPING: 'stopping'
};
const serverInfos = ref({
    address: '192.168.1.1',
    port: 5621,
    status: SERVER_STATUS.RUNNING
});

const SERVER_BUTTON_ICONS = {
    START: 'i-heroicons-play',
    STOP: 'i-heroicons-stop'
}
const serverButtonLoading = computed(() => serverInfos.value.status === SERVER_STATUS.STARTING || serverInfos.value.status === SERVER_STATUS.STOPPING);
const serverButtonIcon = computed(() => serverInfos.value.status === SERVER_STATUS.RUNNING ? SERVER_BUTTON_ICONS.STOP : SERVER_BUTTON_ICONS.START);
function onServerButtonPressed() {
    if (serverInfos.value.status === SERVER_STATUS.RUNNING) {
        serverInfos.value.status = SERVER_STATUS.STOPPING;
    } else {
        serverInfos.value.status = SERVER_STATUS.STARTING;
    }

    setTimeout(() => {
        if (serverInfos.value.status === SERVER_STATUS.STOPPING) {
            serverInfos.value.status = SERVER_STATUS.STOPPED;
        } else {
            serverInfos.value.status = SERVER_STATUS.RUNNING;
        }
    }, 500);
}
</script>
