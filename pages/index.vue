<script setup lang="ts">
const { t } = useI18n();

const route = useRoute();
const localePath = useLocalePath();

useSeoMeta({
    title: t('meta_title_main'),
    ogTitle: t('meta_title_main'),
    description: t('meta_description_main'),
    ogDescription: t('meta_description_main'),
    ogImage: '/img/kott_logo.webp',
    twitterCard: 'summary_large_image',
    ogUrl: 'kott.fi',
});

definePageMeta({
    layout: 'landing',
});
</script>

<template>
    <header
        class="container flex flex-col min-h-[calc(100svh-10svw)] items-center pt-[15svh] px-2 pb-[10svh] mx-auto w-fit min-w-[33svw] max-w-[90svw]">
        <Logo class="fill-foreground flex justify-sart motion-safe:animate-page-load">
        </Logo>
        <div class="flex flex-col items-center gap-4">
            <h1
                class="self-center flex flex-col w-fit sm:gap-3 items-center drop-shadow-sm pt-4 motion-safe:animate-page-load-2">
                <span class="font-serif text-center text-xl md:text-5xl after:content-[url('public/img/emphasis.svg')]">
                    {{ $t('mission_statement_0') }}
                    <br>
                    {{ $t('mission_statement_1') }}
                </span>
                <span class="text-center text-sm sm:text-lg max-w-prose">
                    {{ $t('mission_statement_2') }}
                    <br>
                    {{ $t('mission_statement_3') }}
                    <br>
                    {{ $t('kort_och_gott') }}.
                    <a :href="'#' + t('benefits')" class="text-apricot-700" aria-hidden="true">*</a>
                </span>
            </h1>
            <div class="flex flex-row xs:gap-4 mt-8 motion-safe:animate-page-load-3 max-w-fit">
                <Button as-child class="bg-background text-foreground w-fit min-h-11 font-bold text-base sm:text-lg
                    hover:-translate-x-0.5
                    hover:-translate-y-0.5
                    hover:drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))]
                    drop-shadow-[.125rem_.125rem_0_hsl(var(--foreground))]
                    active:drop-shadow-none
                    active:-translate-x-0
                    active:-translate-y-0
                    active:shadow-inner
                    active:shadow-apricot-700
                    hover:text-foreground
                    border-2
                    border-foreground
                    hover:bg-apricot-200 transition-all">
                    <a :href="'#' + t('contact')">
                        {{ $t('get_in_touch') }}
                    </a>
                </Button>
                <Button as-child variant="link"
                    class="w-fit min-h-11 text-base sm:text-lg decoration-2 underline hover:no-underline group/button">
                    <a :href="'#' + t('benefits')"
                        class="items-center gap-2 group-hover/button:translate-x-2 transition-all">
                        {{ $t('read_more') }}
                        <Icon name="lucide-arrow-right"></Icon>
                    </a>
                </Button>
            </div>
        </div>
    </header>

    <NuxtImg src="/img/wave1.svg" width="960" height="69" class="min-w-svw w-full pointer-events-none select-none"
        aria-hidden="true" loading="lazy">
    </NuxtImg>

    <main id="main" class="flex flex-col items-center min-h-svh gap-0">
        <section
            class="bg-gradient-to-b from-apricot-300 to-apricot-200 w-full h-fit flex flex-col items-center drop-shadow-[0_-.25rem_0_#FFD3BE] gap-6"
            :id="t('benefits')">
            <div class="w-fit mx-auto text-center px-4 space-y-4 max-w-prose">
                <h2 class="font-serif text-2xl sm:text-3xl md:text-5xl drop-shadow mt-[7.5svh]">
                    {{ $t('benefits_statement') }}
                </h2>
                <p class="leading-tight sm:leading-snug text-xs xs:text-sm inline-block text-mortar-950/90"><span
                        class="text-apricot-800 inline-block" aria-hidden="true">* </span>{{ $t('benefits_text') }}</p>
            </div>

            <hr class="border-mortar-950/50 border-[1px] rounded-full w-1/4 mx-auto border-dashed">

            <GridOfCards></GridOfCards>

            <Button as-child class="bg-apricot-50 text-foreground w-fit my-4 sm:my-8 min-h-11 font-bold text-base sm:text-lg
                hover:-translate-x-0.5
                hover:-translate-y-0.5
                hover:drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))]
                drop-shadow-[.125rem_.125rem_0_hsl(var(--foreground))]
                active:drop-shadow-none
                active:-translate-x-0
                active:-translate-y-0
                active:shadow-inner
                active:shadow-apricot-700
                hover:text-foreground
                border-2
                border-foreground
                hover:bg-apricot-400 transition-all">
                <NuxtLink :to="localePath('work')">{{ $t('earlier_work') }}
                    <Icon name="lucide-arrow-right"></Icon>
                </NuxtLink>
            </Button>
            <NuxtImg src="/img/wave2.svg" width="960" height="51" :id="t('contact')"
                class="min-w-svw w-full pointer-events-none select-none" aria-hidden="true" loading="lazy">
            </NuxtImg>
        </section>

        <section
            class="flex flex-col bg-gradient-to-b from-apricot-600 to-apricot-500 w-full items-center drop-shadow-[0_-.25rem_0_#FFB797]">
            <div class="flex flex-col gap-4 items-center mt-[7.5svh] mb-[10svh]">
                <h2 class="font-serif text-2xl sm:text-3xl md:text-5xl px-4 text-center drop-shadow">
                    {{ $t('get_in_touch') }}
                </h2>
                <p
                    class="leading-tight sm:leading-snug text-xs xs:text-sm text-mortar-950/95 text-center text-balance max-w-prose">
                    {{ $t('contact_message') }}
                </p>
                <ContactCard class="z-50"></ContactCard>
            </div>
            <NuxtImg src="/img/wave3.svg" width="960" height="47"
                class="min-w-svw w-full pointer-events-none select-none" aria-hidden="true" loading="lazy">
            </NuxtImg>
        </section>

    </main>
</template>