<script setup>
let locale = {
    code: 'fi-sv'
};
</script>
<template>
    <div class="container grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">

        <Card
            class="group items-center flex flex-col bg-transparent border-none shadow-none text-start hover:bg-apricot-50 hover:drop-shadow-xl transition-all duration-300">
            <CardHeader class="gap-2 drop-shadow-sm">
                <span class="bg-gradient-to-t from-mortar-950 to-mortar-900 shadow-sm group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-apricot-950/25 duration-700 
                    transition-all
                    rounded-full size-fit p-2 flex items-center drop-shadow mx-auto">
                    <Icon name="lucide-sparkles" size="2rem" class="text-apricot-50  transition-all"></Icon>
                </span>
                <CardTitle :lang="locale.code" class="break-words hyphens-auto font-serif tracking-wide text-2xl mt-2">
                    {{
                        $t('adj_1')
                    }}
                </CardTitle>
            </CardHeader>
            <CardContent
                class="text-mortar-950/90 max-w-prose text-balance text-center text-xs xs:text-sm leading-snug -mt-4">
                {{ $t('card_content_1') }}
            </CardContent>
        </Card>

        <hr class="visible xs:hidden border-mortar-950/50 border-[1px] rounded-full border-dashed">

        <Card
            class="group items-center flex flex-col bg-transparent border-none shadow-none text-start hover:bg-apricot-50 hover:drop-shadow-xl transition-all duration-300">
            <CardHeader class="gap-2 drop-shadow-sm">
                <span class="bg-gradient-to-t from-mortar-950 to-mortar-900 shadow-sm group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-apricot-950/25 duration-700 
                    transition-all rounded-full size-fit p-2 flex items-center drop-shadow mx-auto">
                    <Icon name="lucide-heart-handshake" size="2rem" class="text-apricot-50  transition-all">
                    </Icon>
                </span>
                <CardTitle :lang="locale.code"
                    class="break-words hyphens-auto font-serif tracking-wide text-2xl mt-2 p-0">{{
                        $t('adj_2') }}
                </CardTitle>
            </CardHeader>
            <CardContent
                class="text-mortar-950/90 max-w-prose text-balance text-center text-xs xs:text-sm leading-snug -mt-4">
                {{ $t('card_content_2') }}
            </CardContent>
        </Card>

        <hr class="visible xs:hidden border-mortar-950/50 border-[1px] rounded-full border-dashed">

        <Card
            class="group items-center flex flex-col bg-transparent border-none shadow-none text-start hover:bg-apricot-50 hover:drop-shadow-xl transition-all duration-300">
            <CardHeader class="gap-2 drop-shadow-sm">
                <span class="bg-gradient-to-t from-mortar-950 to-mortar-900 shadow-sm group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-apricot-950/25 duration-700 
                    transition-all rounded-full size-fit p-2 flex items-center drop-shadow mx-auto">

                    <Icon name="lucide-fingerprint" size="2rem" class="text-apricot-50  transition-all">
                    </Icon>
                </span>
                <CardTitle :lang="locale.code" class="break-words hyphens-auto font-serif tracking-wide text-2xl mt-2">
                    {{
                        $t('adj_3')
                    }}
                </CardTitle>
            </CardHeader>
            <CardContent
                class="text-mortar-950/90 max-w-prose text-balance text-center text-xs xs:text-sm leading-snug -mt-4">
                {{ $t('card_content_3') }}
            </CardContent>
        </Card>

        <hr class="visible xs:hidden border-mortar-950/50 border-[1px] rounded-full border-dashed">

        <Card
            class="group items-center flex flex-col bg-transparent border-none shadow-none text-start hover:bg-apricot-50 hover:drop-shadow-xl transition-all duration-300">
            <CardHeader class="gap-2 drop-shadow-sm">
                <span class="bg-gradient-to-t from-mortar-950 to-mortar-900 shadow-sm group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-apricot-950/25 duration-700 
                    transition-all rounded-full size-fit p-2 flex items-center drop-shadow mx-auto">
                    <Icon name="lucide-eye" size="2rem" class="text-apricot-50  transition-all"></Icon>
                </span>
                <CardTitle :lang="locale.code" class="break-words hyphens-auto font-serif tracking-wide text-2xl mt-2">
                    {{
                        $t('adj_4')
                    }}
                </CardTitle>
            </CardHeader>
            <CardContent
                class="text-mortar-950/90 max-w-prose text-balance text-center text-xs xs:text-sm leading-snug -mt-4">
                {{ $t('card_content_4') }}
            </CardContent>
        </Card>

        <hr class="visible xs:hidden border-mortar-950/50 border-[1px] rounded-full border-dashed">

        <Card
            class="group items-center flex flex-col bg-transparent border-none shadow-none text-start hover:bg-apricot-50 hover:drop-shadow-xl transition-all duration-300">
            <CardHeader class="gap-2 drop-shadow-sm">
                <span class="bg-gradient-to-t from-mortar-950 to-mortar-900 shadow-sm group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-apricot-950/25 duration-700 
                    transition-all rounded-full size-fit p-2 flex items-center drop-shadow mx-auto">
                    <Icon name="lucide-rocket" size="2rem" class="text-apricot-50  transition-all"></Icon>
                </span>
                <CardTitle :lang="locale.code" class="break-words hyphens-auto font-serif tracking-wide text-2xl mt-2">
                    {{
                        $t('adj_5')
                    }}
                </CardTitle>
            </CardHeader>
            <CardContent
                class="text-mortar-950/90 max-w-prose text-balance text-center text-xs xs:text-sm leading-snug -mt-4">
                {{ $t('card_content_5') }}
            </CardContent>
        </Card>

        <hr class="visible xs:hidden border-mortar-950/50 border-[1px] rounded-full border-dashed">

        <Card
            class="group items-center flex flex-col bg-transparent border-none shadow-none text-start hover:bg-apricot-50 hover:drop-shadow-xl transition-all duration-300">
            <CardHeader class="gap-2 drop-shadow-sm">
                <span class="bg-gradient-to-t from-mortar-950 to-mortar-900 shadow-sm group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-apricot-950/25 duration-700 
                    transition-all rounded-full size-fit p-2 flex items-center drop-shadow mx-auto">
                    <Icon name="lucide-search-check" size="2rem" class="text-apricot-50  transition-all">
                    </Icon>
                </span>
                <CardTitle :lang="locale.code" class="break-words hyphens-auto font-serif tracking-wide text-2xl mt-2">
                    {{
                        $t('adj_6')
                    }}
                </CardTitle>
            </CardHeader>
            <CardContent
                class="text-mortar-950/90 max-w-prose text-balance text-center text-xs xs:text-sm leading-snug -mt-4">
                {{ $t('card_content_6') }}
            </CardContent>
        </Card>
    </div>
</template>