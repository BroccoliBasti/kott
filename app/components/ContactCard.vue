<template>
    <div class="group flex flex-col gap-0 items-center mx-2">
        <NuxtImg src="/img/beanie_cutout.webp" width="246" height="318" :alt="$t('beanie_alt')" loading="lazy"
            class="max-w-40 translate-y-12 group-hover:translate-y-10 transition-all ease duration-500 drop-shadow-[-.25rem_0_0_#FFEEDF] group-hover:drop-shadow-[-.2rem_-.25rem_0_#FFEEDF] select-none">
        </NuxtImg>
        <Card
            class="flex flex-col text-xl sm:text-2xl max-w-[96svw] w-fit py-2 sm:py-4 px-4 sm:px-8 rounded-xl sm:gap-2 bg-apricot-50 shadow-inner shadow-apricot-100 border-4 border-foreground drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))]">
            <CardHeader class="px-0 py-0 pb-2 sm:py-2">
                <CardTitle class="font-serif font-thin text-foreground text-md sm:text-3xl text-nowrap">
                    Sebastian Renkonen
                </CardTitle>
            </CardHeader>
            <hr class="border-mortar-900 border-[1.5px] rounded-full drop-shadow-sm w-full mx-auto mb-2 border-dashed">
            <CardContent class="flex flex-col p-0 xs:gap-2 m-0 w-fit items-start justify-items-start">
                <Button variant="link" as-child
                    class="text-xs sm:text-lg ps-0 gap-2 md:gap-4 h-7 sm:min-h-11 group/icons">
                    <a href="mailto:sebastian.renkonen@kott.fi"
                        class="flex flex-row gap-2 md:gap-4 tracking-widest hover:underline text-foreground !p-0 decoration-mortar-900 decoration-2">
                        <span
                            class="bg-apricot-50 xs:bg-foreground rounded-full size-fit p-0 xs:p-2 flex items-center justify-center xs:drop-shadow">
                            <Icon name="lucide:mail" size="1.25rem"
                                class="text-foreground xs:text-apricot-50 w-4 h-4 sm:w-7 sm:h-7 group-hover/icons:animate-wiggle subpixel-antialiased">
                            </Icon>
                        </span>
                        sebastian.renkonen@kott.fi
                    </a>
                </Button>
                <Button variant="link" as-child
                    class="text-xs sm:text-lg ps-0 gap-2 md:gap-4 h-7 sm:min-h-11 group/icons">
                    <a href="sms:+358409115961"
                        class="flex flex-row gap-2 md:gap-4 tracking-widest hover:underline text-foreground !p-0 decoration-mortar-900 decoration-2">
                        <span
                            class=" bg-apricot-50 xs:bg-foreground rounded-full size-fit p-0 xs:p-2 flex items-center justify-center xs:drop-shadow">
                            <Icon name="lucide:phone" size="1.25rem"
                                class="text-foreground xs:text-apricot-50 w-4 h-4 sm:w-7 sm:h-7  group-hover/icons:animate-wiggle subpixel-antialiased">
                            </Icon>
                        </span>
                        +358 (0)40 911 5961
                    </a>
                </Button>
            </CardContent>
        </Card>
    </div>
</template>