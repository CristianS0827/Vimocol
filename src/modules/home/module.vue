<template>
  <Header />
  <div class="min-h-[calc(100vh-82px)]  bg-neutral-gray ">
    <router-view />
  </div>
</template>

<script setup>
import Header from "./common/Header.vue";
</script>
