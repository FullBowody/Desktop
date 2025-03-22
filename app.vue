<template>
    <div class="overflow-hidden flex flex-col grow min-h-full h-fit w-full justify-center items-center bg-slate-50 dark:bg-slate-700">
        <Route path="/"><PagesHome /></Route>
        <Route path="/welcome"><PagesWelcome /></Route>
        <Route path="/tutorial/1"><PagesTutorial1 /></Route>
        <Route path="/tutorial/2"><PagesTutorial2 /></Route>
        <Route path="/tutorial/3"><PagesTutorial3 /></Route>
    </div>
</template>

<script lang="ts" setup>
import '~/assets/style.css';
const router = useCustomRouter();
const electron = useElectron();
</script>