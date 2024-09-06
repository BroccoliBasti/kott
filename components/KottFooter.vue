<template>
    <footer class="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-2 revers text-center text-sm justify-evenly items-center bg-apricot-900 pb-4
    drop-shadow-[0_-.25rem_0_#F3976F]">
        <div class="grid grid-flow-row justify-evenly">
            <div>{{ $t('made_by') }} Sebastian Renkonen</div>
            <div>&COPY; 2024</div>
        </div>
        <LanguagePicker class="mx-auto"></LanguagePicker>
    </footer>
</template>
