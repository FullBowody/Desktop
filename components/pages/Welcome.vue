<template>
    <div class="flex flex-col grow">
        <div class="absolute top-0 right-0 p-4">
            <LangSwitcher />
        </div>
        <div class="flex flex-col space-y-2 p-8">
            <div class="flex space-x-4 justify-center items-center">
                <img src="~/assets/FBLogo-transparent.png" class="w-20 h-20" alt="">
                <h1 class="text-blue-500"> {{ $t('app.name') }} </h1>
            </div>
            <div>
                <p> {{ $t('app.slogan') }} </p>
            </div>
        </div>
        <div class="flex flex-col grow space-y-8 justify-center items-center">
            <div>
                <p class="text-center">
                    {{ $t('tutorial.home.thanks') }} <a href="https://fullbowody.com" target="_blank" class="text-blue-500 hover:underline">FullBowody</a> ! <br>
                    {{ $t('tutorial.home.setup') }}
                </p>
            </div>
            <div>
                <UButton icon="i-heroicons-arrow-right" trailing> {{  $t('tutorial.getStarted') }} </UButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>
