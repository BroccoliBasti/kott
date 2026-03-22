<script setup>
const route = useRoute();
const localePath = useLocalePath();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection(localePath('work').split('/').at(-1)).path((route.path).replace('/en', '')).first();
});

import moment from 'moment';

let dateModifiedFormatted = moment(page.value.dateModified).locale('sv').format('DD MMM YYYY');

useSeoMeta({
  title: page.value.title + ' | Kott.fi',
  ogTitle: page.value.title + ' | Kott.fi',
  description: page.value.description,
  ogDescription: page.value.description,
  ogImage: '/img/work' + page.value.pageURL + page.value.pageURL + '.webp',
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <article
    class="min-h-[calc(84svh-60px)] container flex flex-col items-center gap-0 xs:gap-6 sm:gap-8 md:gap-12 md:w-[75%] max-w-prose mt-4 sm:mt-0 mb-32 px-4 xs:px-8">
    <header class="grid justify-items-center">
      <NuxtLink :to="localePath('work')" class="text-xs sm:text-sm md:text-base !no-underline text-apricot-950/50">
        Kott<span class="text-2xl">܀</span>blog
      </NuxtLink>
      <h1
        class="text-2xl sm:text-4xl md:text-5xl font-serif text-balance text-center whitespace-nowrap overflow-visible max-w-screen h-fit leading-none">
        {{ page.title }}</h1>
      <div class="mt-2 text-xs sm:text-sm md:text-base text-apricot-950/50">
        <span>Sebastian Renkonen</span> |
        <time :datetime="page.dateModified">{{ dateModifiedFormatted }} </time>
      </div>
    </header>

    <figure class="relative w-full mb-6 sm:mb-0" role="figure">
      <div class="flex flex-row w-full">
        <span class="hidden sm:block sm:absolute top-16 -left-10 h-[75%] w-[2px] bg-apricot-900/15">
        </span>
        <span class="hidden sm:block sm:absolute top-4 -left-6 h-[90%] w-[2px] bg-apricot-900/15">
        </span>
        <NuxtImg :src="'/img/work' + page.pageURL + page.pageURL + '.webp'" :alt="page.imageDescription" width="568"
          height="568" class="thumbnail w-full h-full aspect-square object-cover !drop-shadow-highlight">
        </NuxtImg>
        <span class="hidden sm:block sm:absolute top-16 -right-10 h-[75%] w-[2px] bg-apricot-900/15">
        </span>
        <span class="hidden sm:block sm:absolute top-4 -right-6 h-[90%] w-[2px] bg-apricot-900/15">
        </span>
      </div>
      <figcaption class="text-apricot-950/50 text-xs mt-2" id="caption" aria-hidden="true">
        {{ page.imageDescription }}
      </figcaption>
    </figure>

    <main id="main">
      <ContentRenderer v-if="page" :value="page" class="max-w-prose text-sm md:text-base" />

      <p class="!text-sm md:!text-base !first-letter:font-sans">
        {{ $t('visit_here') }}
        <NuxtLink :to="'https://' + page.siteURL" external>{{ page.siteURL }}</NuxtLink>.
      </p>
    </main>
    <hr>
  </article>
</template>

<style scoped>
:deep(h2) {
  @apply font-serif text-xl sm:text-2xl md:text-3xl drop-shadow mt-[7.5svh] mb-4
}

:deep(img) {
  @apply rounded-sm bg-white shadow-md w-full drop-shadow-apricot shadow-apricot-900/15 my-4
}

:deep(.thumbnail) {
  @apply mb-0 -mt-4
}

:deep(ul) {
  @apply list-disc ps-4
}

:deep(ul):first-of-type {
  @apply hidden
}

:deep(hr), hr {
  @apply border-mortar-950/50 border-[1px] rounded-full w-1/4 mx-auto border-dashed
}

:deep(p) {
  @apply text-foreground mb-8
}

:deep(p):first-of-type {
  @apply first-letter:text-2xl first-letter:font-serif
}

:deep(p):last-of-type {
  @apply first-letter:text-base first-letter:font-sans
}

:deep(a) {
  @apply underline hover:no-underline
}
</style>