<script setup>
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

const position = ref('bottom');
</script>

<template>
    <DropdownMenu class="flex justify-center gap-8">
        <DropdownMenuTrigger as-child>
            <Button variant="outline" class="flex flex-row items-center mx-auto gap-1 text-xl border-2 px-2 border-foreground bg-inherit rounded-md font-lexend font-semibold size-fit
            antialiased hover:subpixel-antialiased
                hover:-translate-x-1 
                hover:-translate-y-1 
                hover:rotate-1
                hover:drop-shadow-[.25rem_.25rem_0_hsl(var(--foreground))] 
                transition-all
                ">
                <Icon name="lucide:globe" size="1.5rem"></Icon>
                <span class="pb-[0.1rem]">{{ $t('language') }}</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="font-lexend">
            <DropdownMenuRadioGroup v-model="position">
                <DropdownMenuItem value="sv" @click="setLocale('sv')">
                    {{ $t('language_sv') }}
                </DropdownMenuItem>
                <DropdownMenuItem value="en" @click="setLocale('en')">
                    {{ $t('language_en') }}
                </DropdownMenuItem>
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    <div class="flex justify-center gap-8">
    </div>
</template>