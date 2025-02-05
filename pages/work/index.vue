<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

const { data: pages } = await useAsyncData(() => {
    return queryCollection(localePath('work').split('/').at(-1)).all();
});

useSeoMeta({
    title: t('earlier_work') + ' | Kott.fi',
    ogTitle: t('earlier_work') + ' | Kott.fi',
    description: t('meta_description_work'),
    ogDescription: t('meta_description_work'),
    ogImage: '/img/kott_logo.webp',
    twitterCard: 'summary_large_image',
    ogUrl: 'kott.fi',
});

</script>
<template>
    <main id="main" class="container flex flex-col gap-4 sm:gap-8 items-center">
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-serif mt-8 sm:mt-4 md:mt-0">
            {{ $t('earlier_work') }}
        </h1>

        <hr class=" border-mortar-950/50 border-[1px] rounded-full w-1/4 mx-auto border-dashed">

        <div
            class="grid w-full grid-cols-1 lg:grid-cols-2 justify-center justify-items-center gap-4 px-2 xs:px-8 sm:gap-8 sm:px-16">

            <NuxtLink v-for="page in pages" :to="localePath('work') + page.pageURL">
                <Card
                    class="group grid w-fit items-center overflow-hidden border-none rounded-lg bg-white text-center text-foreground shadow-lg shadow-apricot-900/15 drop-shadow duration-1000 motion-safe:transition-all sm:flex sm:max-w-fit lg:max-w-[420px] sm:flex-row md:justify-evenly lg:grid lg:items-baseline lg:justify-normal motion-safe:animate-page-load">
                    <NuxtImg :src="'/img/work' + page.pageURL + page.pageURL + '.webp'" height="420" width="420"
                        :alt="page.imageDescription"
                        class="row-span-2 pt-4 sm:pt-0 aspect-[2/1] sm:h-[50%] object-contain place-self-center[image-rendering:_high-quality] h-full w-full lg:w-full sm:aspect-square lg:h-full max-w-full">
                    </NuxtImg>
                    <div
                        class="flex h-full w-full flex-col items-center pb-8 pt-4 sm:min-w-[50%] sm:justify-center lg:justify-start">
                        <CardHeader class="gap-4 py-4">
                            <CardTitle class="p-0 font-serif lg:text-3xl">{{ page.title }}
                            </CardTitle>
                        </CardHeader>
                        <hr
                            class="mx-auto -mt-2 mb-2 w-1/2 rounded-full border-t-2 border-foreground transition-all duration-500 group-hover:w-3/4" />
                        <CardContent class="mx-auto w-full max-w-prose text-balance px-4 text-foreground">
                            {{ page.description }}
                        </CardContent>
                    </div>
                    <div
                        class="absolute bottom-0 end-0 start-0 mx-auto w-fit rounded-t-md bg-[#111] px-6 py-1 text-white sm:start-[50%] lg:start-0">
                        2024
                    </div>
                </Card>
            </NuxtLink>
        </div>
        <hr class=" border-mortar-950/50 border-[1px] rounded-full w-1/4 mx-auto border-dashed mb-4 sm:mb-8">
    </main>
</template>