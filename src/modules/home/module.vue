<template>
  <div class="min-h-screen bg-neutral-gray/50">
    <Header />
    <div><router-view /></div>
  </div>
</template>

<script setup>
import Header from "./common/Header.vue";
</script>
