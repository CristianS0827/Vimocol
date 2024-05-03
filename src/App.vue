<script setup>
import { ref, watch } from "vue";
import Cookies from "js-cookie";
import { Toaster, toast } from "vue-sonner";

watch(() => {});
</script>

<template>
  <div id="app">
    <Toaster
      rich-colors=""
      position="top-center"
      :close-button="true"
      :duration="1500"
    />
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");
* {
  font-family: Poppins, Helvetica, Arial, sans-serif;
}
</style>
