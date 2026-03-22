<script setup>

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value);
});
</script>

<template>
    <div class="flex flex-row gap-2 w-fit items-center">
        <Icon name="lucide:globe" size="1.5rem" class="text-foreground"></Icon>

        <NuxtLink v-for="(locale, index) in availableLocales" :key="index" :to="switchLocalePath(locale.code)"
            class="items-center flex text-xl min-h-11 font-semibold hover:decoration-2 transition-all capitalize pb-1">
            {{ locale.name }}
        </NuxtLink>
    </div>
</template>