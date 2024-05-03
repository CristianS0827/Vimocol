<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-12 w-auto"
        src="/src/assets/vimovol-logo.png"
        alt="Your Company"
      />
      <h2
        class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Ingresa en tu cuenta
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" method="POST" @submit.prevent="loginUser">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Correo electronico</label
          >
          <div class="mt-2">
            <input
              v-model="userData.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-deep-blue/80 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Contraseña</label
            >
            <div class="text-sm">
              <a
                class="font-semibold text-deep-blue hover:text-deep-blue/80 focus:text-deep-blue/80"
                >Olvidaste tu contraseña?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="userData.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-deep-blue/80 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            :disabled="isLoading"
            type="submit"
            class="flex w-full justify-center rounded-md bg-deep-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-deep-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
          <span
                class="justify-center text-sm text-center object-center items-center"
              >
                <span v-if="isLoading" class="items-center object-center">
                  <svg
                    class="w-4 mr-2 h-4 inline-flex border-2 mx-auto border-white border-l-medium-blue rounded-full animate-spin"
                  ></svg
                  >Ingresar</span
                >
                <span v-else>Ingresar</span>
              </span>
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-400">
        No tienes cuenta?
        {{ " " }}
        <router-link
          :to="{ name: 'Register' }"
          class="font-semibold leading-6 text-deep-blue hover:text-deep-blue/80 focus:text-deep-blue/80"
          >Crea tu cuenta
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Cookies from "js-cookie";

const store = useStore();
const router = useRouter();
const isLoading = ref(false);
const userData = ref({
  email: "",
  password: "",
});

const loginUser = async () => {
  isLoading.value = true;
  const payload = userData.value;
  try {
    await store.dispatch("LOGIN_AUTH", { payload });
    isLoading.value = false;
    router.push({ name: "Home" });
  } catch (error) {
    isLoading.value = false;
    throw error;
  }
};
</script>
