<script setup>
const { locale, setLocale } = useI18n();
</script>

<template>

    <main class="flex flex-col py-8 gap-4 md:gap-6 h-[85svh] mx-auto animate-page-load motion-safe:transition-all">

        <div class="flex justify-center mx-auto w-[90%] md:w-[40rem] h-full">
            <img src="public\img\kott_logo.svg" class="w-full h-full"></img>
        </div>

        <div class="container flex flex-col justify-center items-center">
            <h1
                class="md:text-xl text-center flex flex-col gap-2 font-lexend font-semibold items-start drop-shadow-sm border-y-foreground border-y-2 py-8">
                <div>{{ $t('mission_statement_1') }}</div>
                <div class="inner border-none h-9 md:h-16 mb-2 pb-2 overflow-hidden text-2xl md:text-6xl">
                    <span class="flex relative text-start cursor-default font-calistoga pb-4">
                        {{ $t('adj_1') }} <br />
                        {{ $t('adj_2') }} <br />
                        {{ $t('adj_3') }} <br />
                        {{ $t('adj_4') }} <br />
                        {{ $t('adj_5') }} <br />
                    </span>
                </div>
                <div class="text-start">{{ $t('mission_statement_2') }}</div>
            </h1>
        </div>

        <div class="flex flex-col md:text-xl mx-auto pt-16 gap-2">
            <a href="mailto:kott@kott.fi"
                class="flex gap-2 md:gap-4 mx-auto tracking-widest items-center hover:drop-shadow hover:-translate-y-1 transition-all">
                <span class=" bg-foreground rounded-full size-9 flex items-center justify-center drop-shadow">
                    <Icon name="lucide:mail" class="text-background"></Icon>
                </span>
                kott@kott.fi
            </a>
            <a href="tel:+358409115961"
                class="flex gap-2 md:gap-4 mx-auto tracking-widest items-center hover:drop-shadow hover:-translate-y-1 transition-all">
                <span class=" bg-foreground rounded-full size-9 flex items-center justify-center drop-shadow">
                    <Icon name="lucide:phone" class="text-background"></Icon>
                </span>
                +358 (0)40 911 5961
            </a>
        </div>
    </main>
</template>

<style>
:root {
    --font-size: 4.5rem;
}

@media only screen and (max-width:768px) {
    :root {
        --font-size: 2.25rem;
    }
}

.inner span {
    line-height: var(--font-size);
    animation: rolling-text 12s ease-in-out infinite;
}

@keyframes rolling-text {

    0%,
    100% {
        top: 0;
    }

    15% {
        top: 0;
    }

    20% {
        top: calc(var(--font-size)*-1);
    }

    35% {
        top: calc(var(--font-size)*-1);
    }

    40% {
        top: calc(var(--font-size)*-2.1);
    }

    65% {
        top: calc(var(--font-size)*-2.1);
    }

    70% {
        top: calc(var(--font-size)*-3);
    }

    85% {
        top: calc(var(--font-size)*-3);
    }

    90% {
        top: calc(var(--font-size)*-4);
    }

    95% {
        top: calc(var(--font-size)*-4);
    }
}
</style>