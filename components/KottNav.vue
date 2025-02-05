<script setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();

const goBack = () => {
    if (locale.value == 'sv')
        return;
};
</script>
<template>
    <nav>
        <!-- <Button variant='link' @click="history.back()"
            class="absolute h-11 hover:decoration-1 top-[2vh] start-2 md:start-[calc(1rem+5vw)] z-50">
            <Icon name="lucide-arrow-left"></Icon>
            {{ $t('back') }}

        </Button> -->
        <NuxtLink :to="localePath('/')">
            <NuxtImg src="/img/kott_logo.webp" width="875" height="235" format="webp,png" :alt="t('logo_description')"
                class="w-fit drop-shadow selection:bg-transparent h-7 sm:h-11 absolute top-[1rem] sm:top-[2svh] left-2 translate-x-[calc(50svw-64%)] z-50">
            </NuxtImg>
        </NuxtLink>
    </nav>
</template>