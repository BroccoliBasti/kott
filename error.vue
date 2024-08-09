<template>
    <NuxtLayout>
        <section>
            <h1 class="text-4xl mb-4">
                Oops! <span class="text-red font-bold">{{ error.statusCode }}</span>
            </h1>

            <h2 class="text-xl">
                {{ error.statusMessage }}
            </h2>
        </section>
    </NuxtLayout>
</template>

<script setup>
defineProps({ error: Object });
useHead({
    title: 'Oops!'
});
</script>