<script setup>
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
});
</script>
<template>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    </Html>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <SkipLink></SkipLink>
        <NuxtImg src="/img/wave1.svg" width="960" height="69"
            class="flex h-fit w-full min-w-svw object-fill rotate-180 pointer-events-none select-none"
            aria-hidden="true">
        </NuxtImg>
        <KottNav></KottNav>
        <slot />
    </div>
    <NuxtImg src="/img/wave3.svg" width="960" height="47" class="min-w-svh w-full pointer-events-none select-none"
        aria-hidden="true" loading="lazy">
    </NuxtImg>
    <KottFooter />
</template>
