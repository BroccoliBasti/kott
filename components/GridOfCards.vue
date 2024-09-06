<template>
    <div class="container grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">

        <Card
            class="bg-transparent border-none shadow-none text-center hover:bg-apricot-50 hover:shadow-inner hover:shadow-apricot-100 transition-all duration-300">
            <CardHeader class="py-4 gap-4 drop-shadow-sm">
                <span
                    class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                    <Icon name="lucide-badge-check" size="2rem" class="text-apricot-50"></Icon>
                </span>
                <CardTitle class="capitalize cursor-default font-serif tracking-wide text-3xl">{{ $t('adj_1') }}
                </CardTitle>
            </CardHeader>
            <CardContent class="text-mortar-950 max-w-prose">
                {{ $t('card_content_1') }}
            </CardContent>
            <!-- <CardFooter>
                <Button as-child>
                    <a href="#">
                        <span class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                            <Icon name="lucide-arrow-right"></Icon>
                        </span>Läs mer 
                    </a>
                </Button>
            </CardFooter> -->
        </Card>

        <Card
            class="bg-transparent border-none shadow-none text-center hover:bg-apricot-50 hover:shadow-inner hover:shadow-apricot-100 transition-all duration-300 ">
            <CardHeader class="p-0 pb-4 sm:py-4 drop-shadow-sm">
                <span
                    class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                    <Icon name="lucide-fingerprint" size="2rem" class="text-apricot-50"></Icon>
                </span>
                <CardTitle class="capitalize cursor-default font-serif tracking-wide text-3xl p-0">{{
                    $t('adj_2') }}
                </CardTitle>
            </CardHeader>
            <CardContent class="text-mortar-950 max-w-prose p-0">
                {{ $t('card_content_2') }}
            </CardContent>
            <!-- <CardFooter>
                <Button as-child>
                    <a href="#">
                        <span class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                            <Icon name="lucide-arrow-right"></Icon>
                        </span>Läs mer 
                    </a>
                </Button>
            </CardFooter> -->
        </Card>

        <Card
            class="bg-transparent border-none shadow-none text-center hover:bg-apricot-50 hover:shadow-inner hover:shadow-apricot-100 transition-all duration-300 ">
            <CardHeader class="py-4 gap-4 drop-shadow-sm">
                <span
                    class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">

                    <Icon name="lucide-heart-handshake" size="2rem" class="text-apricot-50"></Icon>
                </span>
                <CardTitle class="capitalize cursor-default font-serif tracking-wide text-3xl">{{ $t('adj_3') }}
                </CardTitle>
            </CardHeader>
            <CardContent class="text-mortar-950 max-w-prose">
                {{ $t('card_content_3') }}
            </CardContent>
            <!-- <CardFooter>
                <Button as-child>
                    <a href="#">
                        <span class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                            <Icon name="lucide-arrow-right"></Icon>
                        </span>Läs mer 
                    </a>
                </Button>
            </CardFooter> -->
        </Card>

        <Card
            class="bg-transparent border-none shadow-none text-center hover:bg-apricot-50 hover:shadow-inner hover:shadow-apricot-100 transition-all duration-300 ">
            <CardHeader class="py-4 gap-4 drop-shadow-sm">
                <span
                    class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                    <Icon name="lucide-eye" size="2rem" class="text-apricot-50"></Icon>
                </span>
                <CardTitle class="capitalize cursor-default font-serif tracking-wide text-3xl">{{ $t('adj_4') }}
                </CardTitle>
            </CardHeader>
            <CardContent class="text-mortar-950 max-w-prose">
                {{ $t('card_content_4') }}
            </CardContent>
            <!-- <CardFooter>
                <Button as-child>
                    <a href="#">
                        <span class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                            <Icon name="lucide-arrow-right"></Icon>
                        </span>Läs mer 
                    </a>
                </Button>
            </CardFooter> -->
        </Card>

        <Card
            class="bg-transparent border-none shadow-none text-center hover:bg-apricot-50 hover:shadow-inner hover:shadow-apricot-100 transition-all duration-300 ">
            <CardHeader class="py-4 gap-4 drop-shadow-sm">
                <span
                    class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                    <Icon name="lucide-rocket" size="2rem" class="text-apricot-50"></Icon>
                </span>
                <CardTitle class="capitalize cursor-default font-serif tracking-wide text-3xl">{{ $t('adj_5') }}
                </CardTitle>
            </CardHeader>
            <CardContent class="text-mortar-950 max-w-prose">
                {{ $t('card_content_5') }}
            </CardContent>
            <!-- <CardFooter>
                <Button as-child>
                    <a href="#">
                        <span class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                            <Icon name="lucide-arrow-right"></Icon>
                        </span>Läs mer 
                    </a>
                </Button>
            </CardFooter> -->
        </Card>

        <Card
            class="bg-transparent border-none shadow-none text-center hover:bg-apricot-50 hover:shadow-inner hover:shadow-apricot-100 transition-all duration-300 ">
            <CardHeader class="py-4 gap-4 drop-shadow-sm">
                <span
                    class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                    <Icon name="lucide-puzzle" size="2rem" class="text-apricot-50"></Icon>
                </span>
                <CardTitle class="capitalize cursor-default font-serif tracking-wide text-3xl">{{ $t('adj_6') }}
                </CardTitle>
            </CardHeader>
            <CardContent class="text-mortar-950 max-w-prose">
                {{ $t('card_content_6') }}
            </CardContent>
            <!-- <CardFooter>
                <Button as-child>
                    <a href="#">
                        <span class=" bg-mortar-950 rounded-full size-fit p-2 flex items-center justify-center drop-shadow mx-auto">
                            <Icon name="lucide-arrow-right"></Icon>
                        </span>Läs mer 
                    </a>
                </Button>
            </CardFooter> -->
        </Card>
    </div>
</template>

<style></style>