<script setup lang="ts">
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
});
useHead({
    htmlAttrs: {
        lang: () => head.value.htmlAttrs!.lang,
        dir: () => head.value.htmlAttrs!.dir
    },
});
</script>
<template>
    <div class="content">
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <SkipLink></SkipLink>
        <slot />
        <KottFooter />
    </div>
</template>