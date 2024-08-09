<script setup>

useHead({
  title: 'Kott',
  meta: [
    { name: 'description', content: 'Vi skapar moderna och unika webbsidor som är användarvänliga och anpassade enligt dina behov och önskemål.' }
  ],
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
  <div class="min-h-svh flex flex-col justify-evenly">
    <!-- <KottNav /> -->
    <!-- <LanguagePicker /> -->
    <NuxtPage />
    <div class="spacer waves -z-50"></div>
    <KottFooter />
  </div>
</template>

<style>
*::selection {
  @apply bg-foreground text-background
}

html {
  @apply bg-background text-foreground font-calistoga tracking-widest
}

body {
  background-color: #fee9e2;
  background-image: radial-gradient(circle, #ffffff 25%,
      #fee9e2 100%);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  filter: hue-rotate(0deg);
  height: 100%;
  /* animation: bg-colors 12s linear infinite; */
}

.spacer {
  aspect-ratio: 960/145;
  width: 100%;
  height: fit-content;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

.waves {
  background-image: url('public/img/waves.svg');
}

/*@keyframes bg-colors {

  0%,
  100% {
    filter: hue-rotate(360deg);
  }

  15% {
    filter: hue-rotate(300deg);
  }

  20% {
    filter: hue-rotate(288deg);
  }

  35% {
    filter: hue-rotate(228deg);
  }

  40% {
    filter: hue-rotate(216deg);
  }

  65% {
    filter: hue-rotate(156deg);
  }

  70% {
    filter: hue-rotate(144deg);
  }

  85% {
    filter: hue-rotate(84deg);
  }

  90% {
    filter: hue-rotate(72deg);
  }

  95% {
    filter: hue-rotate(60deg);
  }
} */

/* @keyframes bg-colors {

  from {
    filter: hue-rotate(360deg);
  }

  to {
    filter: hue-rotate(0deg);
  }
} */
</style>
