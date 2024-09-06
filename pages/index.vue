<template>
    <main class="flex flex-col items-center min-h-svh gap-0">

        <section class="flex flex-col pt-[15svh] pb-[10svh] w-[clamp(5rem,75%,50rem)]">
            <!-- <div
                class="absolute top-0 left-0 w-full h-full bg-[url('/img/spiral.svg')] bg-center bg-cover opacity-5 -z-20">
            </div> -->
            <div class="flex justify-sart motion-safe:animate-page-load pe-[clamp(1rem,_4vw,_4rem)]">
                <NuxtImg src="\img\kott_logo.webp" format="webp,png"
                    alt="Kott logo - flat all black logo with a leaning round pinecone" class="  drop-shadow-sm">
                </NuxtImg>
            </div>
            <div class="flex flex-col items-center mx-auto gap-4">
                <h1
                    class="self-center flex flex-col w-fit sm:gap-3 items-center drop-shadow-sm pt-8 motion-safe:animate-page-load">
                    <div class="font-serif text-xl md:text-5xl">
                        {{ $t('mission_statement_1') }}
                    </div>
                    <div
                        class="inner border-none h-9 md:h-24 overflow-hidden text-xl md:text-7xl font-serif leading-[var(--jump-length)]">
                        <span
                            class="flex relative text-center cursor-default sm:pb-4 animate-rolling-text leading-[var(--jump-length)] animate-delay-1000">
                            {{ $t('tag_1') }} <br />
                            {{ $t('tag_2') }} <br />
                            {{ $t('tag_3') }} <br />
                            {{ $t('tag_4') }} <br />
                            {{ $t('tag_5') }} <br />
                            {{ $t('tag_6') }} <br />
                            {{ $t('tag_7') }} <br />
                            {{ $t('tag_8') }} <br />
                            {{ $t('tag_9') }} <br />
                            {{ $t('tag_10') }} <br />
                        </span>
                    </div>
                </h1>
                <p class="text-base sm:text-lg -translate-y-4 sm:translate-y-0 font-thin mx-auto mb-4">
                <div class="text-center">
                    {{ $t('mission_statement_2') }}
                </div>
                <div class="text-center">
                    {{ $t('mission_statement_3') }}
                </div>
                </p>
                <div class="flex flex-row gap-4">
                    <Button as-child class="bg-apricot-200 text-foreground w-fit min-h-11 font-bold text-base sm:text-lg
                    hover:-translate-x-0.5
                    hover:-translate-y-0.5
                    hover:drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))]
                    drop-shadow-[.125rem_.125rem_0_hsl(var(--foreground))]
                    active:drop-shadow-none
                    active:-translate-x-0
                    active:-translate-y-0
                    active:shadow-apricot-700
                    shadow-inner
                    shadow-apricot-300
                    hover:shadow-apricot-600
                    hover:text-foreground
                    border-2
                    border-foreground
                    hover:bg-apricot-400 transition-all">
                        <a href="#contact">
                            {{ $t('get_in_touch') }}
                        </a>
                    </Button>
                    <Button as-child variant="link" class="w-fit min-h-11 text-base sm:text-lg hover:decoration-2">
                        <a href="#benefits" class="items-center gap-2">
                            {{ $t('read_more') }}
                            <Icon name="lucide-arrow-right"></Icon>
                        </a>
                    </Button>
                </div>
            </div>
        </section>

        <NuxtImg src="/img/wave2.svg" id="benefits" class="w-lvw min-w-full overflow-hidden" aria-hidden="true">
        </NuxtImg>

        <section
            class="bg-gradient-to-b from-apricot-300 to-apricot-200 w-full h-fit flex flex-col items-center drop-shadow-[0_-.25rem_0_#FFD3BE]">
            <GridOfCards class="mt-[7.5svh] mb-[10svh]"></GridOfCards>
            <NuxtImg src="/img/wave3.svg" id="contact" class="w-lvw min-w-full overflow-hidden" aria-hidden="true">
            </NuxtImg>
        </section>

        <section class="bg-gradient-to-b from-apricot-600 to-apricot-500 w-full drop-shadow-[0_-.25rem_0_#FFB797]">

            <div class="flex flex-col gap-4 items-center mt-[7.5svh] mb-[10svh]">
                <h2 class="font-serif text-5xl text-center drop-shadow mb-2">
                    {{ $t('contact_me') }}
                </h2>
                <p class="text-mortar-950/95 max-w-prose text-center text-balance">
                    {{ $t('contact_message') }}
                </p>
                <ContactCard class="z-50 my-12"></ContactCard>
            </div>
            <NuxtImg src="/img/wave4.svg" class="w-lvw min-w-full overflow-hidden" aria-hidden="true"></NuxtImg>
        </section>

    </main>
</template>

<style>
:root {
    --jump-length: 6.5rem;
}

@media (max-width:768px) {
    :root {
        --jump-length: 2.25rem;
    }
}

.inner span {
    line-height: var(--jump-length);
}
</style>