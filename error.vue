<template>
    <section
        class="container grid grid-flow-row gap-2 sm:gap-6 justify-center content-center text-center h-full min-h-svh">
        <h1 class="font-serif text-[calc(3rem+10vw)] leading-none">
            <span class="text-rose-900 font-bold">{{ error.statusCode
                }}</span>
        </h1>
        <h2 class="text-xl sm:text-3xl">
            <span class="font-bold">Oops!</span>
            <br>
            {{ error.statusMessage }}
        </h2>
        <!-- <p class="text-xl">
            Använd knappen nedan för att komma tillbaks
        </p> -->
        <Button as-child variant="outline" class="flex flex-row items-center mx-auto gap-1 text-xl border-2 px-2 border-foreground bg-inherit rounded-md font-semibold size-fit leading-6 hover:leading-6
            antialiased 
                hover:subpixel-antialiased
                hover:cursor-pointer
                hover:-translate-x-1 
                hover:-translate-y-1
                hover:drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))] 
                transition-all
                ">
            <a @click="handleError">
                <Icon name="lucide-arrow-big-left" size="1.5rem"></Icon>
                <span class="pb-[0.1rem]">{{ $t('back') }}</span>
            </a>
        </Button>
    </section>
</template>

<script setup>
defineProps({ error: Object });
useHead({
    title: 'Oops!'
});

const error = useError();

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>