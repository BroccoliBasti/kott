<template>
    <article class="container md:w-[75%] lg:w-[50%] max-w-prose mt-6 mb-32">

        <h1 class="text-2xl sm:text-4xl md:text-5xl font-serif">{{ $t('privacy_policy') }}</h1>

        <div class="w-full mx-auto my-8">
            <h2 class="font-typewriter font-extrabold text-xl text-start leading-5 mb-4">{{ $t('privacy_maintainer') }}
            </h2>
            <p>
                Sebastian Renkonen (3458567-6)
            </p>
            <p class="capitalize">
                {{ $t('phone') }}: <NuxtLink href="tel:+358409115961" external class="underline hover:no-underline">+358
                    40 911 5961
                </NuxtLink>
            </p>
            <p class="capitalize">
                {{ $t('email') }}: <NuxtLink href="mailto:sebastian.renkonen@kott.fi" external
                    class="underline hover:no-underline lowercase">
                    sebastian.renkonen@kott.fi
                </NuxtLink>
            </p>
        </div>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5">
                        {{ $t('privacy_h_1') }}?
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p>
                        {{ $t('privacy_1_text_1') }}:
                    </p>
                    <ul class="list-disc pl-4">
                        <li>{{ $t('personal_name') }}</li>
                        <li>{{ $t('organization_name') }}</li>
                        <li>{{ $t('email') }}</li>
                        <li>{{ $t('address') }}</li>
                        <li>{{ $t('phone') }}{{ $t('number') }}.</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5">
                        {{ $t('privacy_h_2') }}?
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p>{{ $t('privacy_2_text_1') }}.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5">
                        {{ $t('privacy_h_3') }}?
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p>{{ $t('privacy_3_text_1') }}:</p>
                    <ul class="list-disc pl-4">
                        <li>{{ $t('privacy_3_text_2') }}.</li>
                        <li>{{ $t('privacy_3_text_3') }}.</li>
                        <li>{{ $t('privacy_3_text_4') }}.</li>
                        <li>{{ $t('privacy_3_text_5') }}.</li>
                    </ul>
                    <br>
                    <p>{{ $t('privacy_3_text_6') }}.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5">
                        {{ $t('privacy_h_4') }}?
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p>{{ $t('privacy_4_text_1') }}.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5">
                        {{ $t('privacy_h_5') }}
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p>{{ $t('privacy_5_text_1') }}.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5">{{ $t('privacy_h_6') }}?
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p>{{ $t('privacy_6_text_1') }}:
                    </p><br>


                    <ul class="list-disc pl-4">
                        <li>
                            <strong>{{ $t('right_to_access') }}</strong> -
                            {{ $t('right_to_access_text') }}.
                        </li><br>
                        <li>
                            <strong>{{ $t('right_to_rectification') }}</strong> -
                            {{ $t('right_to_rectification_text') }}.
                        </li><br>
                        <li>
                            <strong>{{ $t('right_to_erasure') }}</strong> -
                            {{ $t('right_to_erasure_text') }}.
                        </li><br>
                        <li>
                            <strong>{{ $t('right_to_restrict') }}</strong> -
                            {{ $t('right_to_restrict_text') }}.
                        </li><br>
                        <li>
                            <strong>{{ $t('right_to_object') }}</strong> -
                            {{ $t('right_to_object_text') }}.
                        </li><br>
                        <li>
                            <strong>{{ $t('right_to_portability') }}</strong> -
                            {{ $t('right_to_portability_text') }}.
                        </li><br>
                        <li>{{ $t('privacy_6_text_2') }}.
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5">
                        {{ $t('privacy_h_7') }}
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p>{{ $t('privacy_7_text_1') }}.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5">
                        {{ $t('privacy_h_8') }}
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p> {{ $t('privacy_8_text_1') }}.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5"> {{ $t('privacy_h_9') }}
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p> {{ $t('privacy_9_text_1') }}
                        <time :datetime="date">{{ lastUpdated }}</time>.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" class="w-full mx-auto" collapsible>
            <AccordionItem value="" class="border-apricot-200">
                <AccordionTrigger>
                    <h2 class="font-typewriter font-extrabold text-xl text-start leading-5"> {{ $t('privacy_h_10') }}
                    </h2>
                </AccordionTrigger>
                <AccordionContent
                    class="max-w-prose bg-gradient-to-b from-transparent to-apricot-100/25 min-w-full ps-2 pe-6">
                    <p> {{ $t('privacy_10_text_1') }} <NuxtLink to="mailto:sebastian.renkonen@kott.fi"><strong> {{
                        $t('email') }}</strong>
                        </NuxtLink>. {{ $t('privacy_10_text_2') }}.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </article>
</template>


<script setup>
const { t } = useI18n();
import moment from 'moment';

const date = '2025-1-30';
const lastUpdated = moment(date).format('DD.MM.YYYY');

definePageMeta({
    layout: 'default',
});

useSeoMeta({
    title: t('privacy_policy') + ' | Kott.fi',
    ogTitle: t('privacy_policy') + ' | Kott.fi',
    description: t('meta_description_privacy'),
    ogDescription: t('meta_description_privacy'),
    ogUrl: 'kott.fi/' + t('privacy_policy_slug'),
});
</script>