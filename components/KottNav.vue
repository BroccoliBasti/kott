<template>
    <nav class="tracking-wide">
        <ul class="list-none flex justify-evenly p-4">
            <li
                class="bg-foreground text-white rounded-lg drop-shadow-aura hover:scale-105 hover:-rotate-1 transition-all ease-in-out duration-300 group decoration-blue focus:outline-none focus:border-blue">
                <NuxtLink to="/"
                    class="flex px-4 py-2 lg:px-6 lg:py-3 lg:text-xl group-hover:underline focus-within:underline decoration-2 decoration-blue transition-all">
                    Home</NuxtLink>
            </li>
            <li
                class="bg-foreground text-white rounded-lg drop-shadow-aura hover:scale-105 hover:rotate-1 transition-all ease-in-out duration-300 group">
                <NuxtLink to="/contact"
                    class="flex px-4 py-2 lg:px-6 lg:py-3 lg:text-xl group-hover:underline focus-within:underline decoration-2 decoration-green transition-all">
                    Contact
                </NuxtLink>
            </li>
            <li
                class="bg-foreground text-white rounded-lg drop-shadow-aura hover:scale-105 hover:-rotate-1  transition-all ease-in-out duration-300 group">
                <NuxtLink to="/portfolio"
                    class="flex px-4 py-2 lg:px-6 lg:py-3 lg:text-xl group-hover:underline focus-within:underline decoration-2 decoration-red transition-all">
                    Portfolio</NuxtLink>
            </li>
        </ul>
    </nav>
</template>