<script setup>
const router = useRouter();
const { currentRoute } = router;

const { locale, setLocale } = useI18n();

const languages = [
    [{
        label: 'svenska',
        shortcuts: ['S'],
        click: () => {
            setLocale('sv');
        }
    }],
    [{
        label: 'english',
        shortcuts: ['E'],
        click: () => {
            setLocale('en');
        }
    }],
];

// const position = ref('top');
</script>

<template>
    <!-- <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline" class="items-center mx-auto gap-1 text-xl border-2 px-2 border-foreground bg-inherit rounded-md font-semibold size-fit
                hover:-translate-x-1 
                hover:-translate-y-1 
                hover:drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))] 
                hover:text-foreground
                hover:bg-apricot-50
                hover:shadow-inner
                hover:shadow-apricot-100
                data-[state=open]:-translate-x-1 
                data-[state=open]:-translate-y-1 
                data-[state=open]:drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))] 
                data-[state=open]:text-foreground
                data-[state=open]:bg-apricot-50
                transition-all
                ">
                <Icon name="lucide:globe" size="1.5rem"></Icon>
                <span class="pb-[0.1rem]">{{ $t('language') }}</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="absolute -bottom-5 -right-10 border-foreground border-2  w-48">
            <DropdownMenuRadioGroup v-model="position">
                <DropdownMenuItem value="sv" @click="setLocale('sv')" class="hover:bg-accent min-h-11">
                    {{ $t('language_sv') }}
                </DropdownMenuItem>
                <DropdownMenuSeparator class="mx-2 opacity-25" />
                <DropdownMenuItem value="en" @click="setLocale('en')" class="hover:bg-accent min-h-11">
                    {{ $t('language_en') }}
                </DropdownMenuItem>
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu> -->

    <div class="flex flex-row gap-2 w-fit items-center">
        <!-- <TooltipProvider>
            <Tooltip>
                <TooltipTrigger as-child> -->
        <Icon name="lucide:globe" size="1.5rem" class="text-foreground w-16"></Icon>

        <!-- </TooltipTrigger>
                <TooltipContent>
                    <p>Välj språk</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider> -->

        <Button variant="link" @click="setLocale('en')"
            class="items-center text-xl min-h-11 font-semibold hover:decoration-2 transition-all">
            EN
        </Button>

        <Button variant="link" @click="setLocale('sv')"
            class="items-center text-xl min-h-11 font-semibold hover:decoration-2 transition-all">
            SV
        </Button>
    </div>
</template>

<!-- absolute -bottom-5 -right-10 w-48 -->

<!-- <style>
[data-radix-popper-content-wrapper] {
    /* transform: translateY(250px) !important; */
    position: fixed !important;
}
</style> -->