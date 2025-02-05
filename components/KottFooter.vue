<script setup>
const localePath = useLocalePath();
</script>
<template>
    <footer class="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-3 text-center text-sm justify-evenly items-center bg-apricot-900 pb-4 px-6
    drop-shadow-[0_-.25rem_0_#F3976F]">
        <div class="grid grid-flow-row justify-evenly">
            <div>{{ $t('made_by') }} Sebastian Renkonen</div>
            <div>&COPY; 2025</div>
        </div>
        <NuxtLink :to="localePath('privacy')"
            class="flex w-fit mx-auto hover:underline hover:decoration-[1.5px] items-center">{{
                $t('privacy_policy') }} <Icon name="lucide-arrow-up-right"></Icon>
        </NuxtLink>
        <LanguagePicker class="mx-auto"></LanguagePicker>
    </footer>
</template>
