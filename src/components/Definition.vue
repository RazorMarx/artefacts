<template>
    <div class="wrapper flex flex-col m-auto p-4 gap-3 max-w-[420px] justify-center "
        :class="{ 'items-end': direction === 'rtl',
                  'animate-entry': animate,
                  'text-af-royalpurple': color === 'purple',
                  'text-af-royalblue': color === 'blue',
                  'text-white': color === 'white',
                }"
        >
        <div class="text-6xl font-dream" style="--index: 1">{{ nom }}</div>
        <div class="flex gap-2" style="--index: 2">
            <div class="font-light">[\{{ phonetic }}\]</div>
            <div class="italic font-semibold">{{ type }}</div>
            <div v-if="genre" class="font-extrabold">{{ genre }}</div>
        </div>
        <div class="max-w-[45ch] leading-tight" :class="{ 'text-right': direction === 'rtl' }" style="--index: 3">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    nom: String,
    type: String,
    genre: String,
    phonetic: String,
    color: {
        type: String,
        default: "blue"
    },
    direction: {
        type: String,
        default: "ltr"
    },
    animate: {
        type: Boolean,
        default: false
    }
});
</script>