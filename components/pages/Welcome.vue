<template>
    <div class="flex flex-col grow justify-evenly items-center">
        <div class="flex space-x-4 absolute top-0 right-0 p-4">
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
        <div class="show-up flex flex-col space-y-2 p-8">
            <div class="flex space-x-4 justify-center items-center">
                <img src="~/assets/FBLogo-transparent.png" class="w-20 h-20 drop-shadow-lg" alt="">
                <h1 class="text-blue-500"> {{ $t('app.name') }} </h1>
            </div>
            <div class="show-up">
                <p class="text-center"> {{ $t('app.slogan') }} </p>
            </div>
        </div>
        <div class="show-up flex flex-col space-y-8 justify-center items-center" style="animation-delay: .2s;">
            <div>
                <p class="text-center">
                    {{ $t('tutorial.home.thanks') }} <a href="https://fullbowody.com" target="_blank">FullBowody</a> ! <br>
                    {{ $t('tutorial.home.setup') }}
                </p>
            </div>
            <div class="show-up flex w-full space-x-4 justify-between" style="animation-delay: .2s;">
                <UButton variant="solid" color="gray" icon="i-heroicons-x-mark" heading @click="skipTutorial()"> {{  $t('tutorial.skip') }} </UButton>
                <UButton icon="i-heroicons-arrow-right" trailing class="animate" @click="router.push('/tutorial/1')"> {{  $t('tutorial.getStarted') }} </UButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const router = useCustomRouter();
function skipTutorial() {
    localStorage.setItem('tutorial', 'done');
    router.push('/');
}
</script>
