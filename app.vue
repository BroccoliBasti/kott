<script setup>

useSeoMeta({
  title: 'Kott.fi - Skräddarsydda webbsidor från Österbotten',
  ogTitle: 'Kott.fi - Skräddarsydda webbsidor från Österbotten',
  description: 'Vi skapar moderna och unika webbsidor för företagare, som är användarvänliga och anpassade för behov och önskemål.',
  ogDescription: 'Vi skapar moderna och unika webbsidor för företagare, som är användarvänliga och anpassade för behov och önskemål.',
  ogImage: '/img/kott_logo.webp',
  twitterCard: 'summary_large_image',
  ogUrl: 'kott.fi',
});
useHead({
  htmlAttrs: {
    lang: 'sv'
  },
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <div class="min-h-svh flex flex-col">
    <!-- <KottNav /> -->
    <NuxtPage />
    <KottFooter />
  </div>
</template>

<style>
*:focus-visible {
  @apply ring-2 ring-offset-2 ring-offset-transparent ring-foreground !important
}

*::selection {
  @apply bg-foreground text-apricot-50
}

html {
  @apply bg-apricot-50 text-foreground font-sans tracking-widest scroll-smooth
}

body {
  background-color: #fff;
  background-image: radial-gradient(circle, #fffaef80 75%, #ffeedf 90%);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  filter: hue-rotate(0deg);
  height: 100%;
}
</style>
