<script setup>
const route = useRoute();

useHead({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    },
    {
      rel: 'canonical',
      href: 'https://kott.fi' + route.path,
    }
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>