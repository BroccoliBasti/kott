<template>
    <form action="mailto:kott@kott.fi" method="get" id="contact" enctype="text/plain"
        class="p-4 flex flex-col gap-4 rounded-3xl bg-red container mx-auto" target="_blank">

        <div>
            <label for="subject" class="hover:cursor-pointer font-semibold">Subject:</label>
            <input type="text" name="subject" id="subject" placeholder=" Your Name/Organization">
        </div>

        <div>
            <label for="email" class="hover:cursor-pointer font-semibold">Email:</label>
            <input type="email" name="email" id="email" placeholder=" Your Email">
        </div>

        <div>
            <label for="message" class="hover:cursor-pointer font-semibold">Message:</label>
            <textarea name="body" id="message" rows="5" cols="30" placeholder=" Your Message"
                class="w-full col-span-2"></textarea>
        </div>

        <input type="submit" value="Send"
            class="cursor-pointer font-semibold border-foreground border-2 px-4 py-1 mt-3 mx-auto col-span-2">
    </form>
</template>