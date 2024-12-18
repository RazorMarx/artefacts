<template>
<div class="w-full h-full fixed flex top-0 left-0 bg-black z-[200]" v-if="loading">
  <div class="m-auto">
    <svg class="animate-spin h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.5"></path>
    </svg>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
let loading = ref(true);

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    loading.value = false;
  }
};
</script>