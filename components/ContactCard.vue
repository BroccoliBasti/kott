<template>
    <Card
        class="flex flex-col text-xl sm:text-2xl w-fit py-4 px-8 rounded-xl gap-2 max-w-[90%] bg-apricot-50 shadow-inner shadow-apricot-100 border-4 border-foreground drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))]">
        <CardHeader class="px-0 py-2">
            <CardTitle
                class="font-serif font-thin text-foreground text-[clamp(1.5rem,100%,2rem)] sm:text-3xl text-nowrap">
                Sebastian Renkonen
            </CardTitle>
        </CardHeader>
        <hr class="border-mortar-900 border-[1.5px] rounded-full drop-shadow-sm w-full mb-2">
        <CardContent class="flex flex-col p-0 pe-8 m-0 w-fit items-start justify-items-start">
            <Button variant="link" as-child class="text-base sm:text-lg px-0 gap-2 md:gap-4 min-h-11 group">
                <a href="mailto:kott@kott.fi"
                    class="flex flex-row gap-2 md:gap-4 tracking-widest hover:underline text-mortar-950 decoration-mortar-900 decoration-[1.5px]">
                    <span class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow">
                        <Icon name="lucide:mail" size="1.25rem"
                            class="text-apricot-50 group-hover:animate-wiggle subpixel-antialiased"></Icon>
                    </span>
                    kott@kott.fi
                </a>
            </Button>
            <Button variant="link" as-child class="text-base sm:text-lg px-0 gap-2 md:gap-4 min-h-11 group">
                <a href="tel:+358409115961"
                    class="flex flex-row gap-2 md:gap-4 tracking-widest hover:underline text-mortar-950 decoration-mortar-900 decoration-[1.5px]">
                    <span class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow">
                        <Icon name="lucide:phone" size="1.25rem"
                            class="text-apricot-50 group-hover:animate-wiggle subpixel-antialiased"></Icon>
                    </span>
                    +358 (0)40 911 5961
                </a>
            </Button>
        </CardContent>
    </Card>
</template>