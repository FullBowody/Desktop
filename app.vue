<template>
    <div class="flex flex-col grow min-h-full h-fit w-full justify-center items-center bg-slate-50 dark:bg-slate-700">
        <PagesWelcome />
    </div>
</template>

<script lang="ts" setup>
import '~/assets/style.css';
const route = useRoute();
const electron = useElectron();
</script>