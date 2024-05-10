<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="closeCart">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-lg">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                >
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"
                        >Productos para cotizacion</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          @click="closeCart"
                        >
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li
                            v-for="product in cartItems"
                            :key="product.id"
                            class="flex py-6"
                          >
                            <div
                              class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                            >
                              <img
                                :src="product.Images"
                                class="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div
                                  class="flex justify-between text-base font-medium text-gray-900"
                                >
                                  <h3>
                                    <a :href="product.href">{{
                                      product.Product_name
                                    }}</a>
                                  </h3>
                                </div>
                              </div>
                              <div
                                class="flex flex-1 items-end justify-between text-sm"
                              >
                                <p class="text-gray-500">
                                  Cantidad {{ product.quantity }}
                                </p>

                                <div class="flex">
                                  <button
                                    @click="deleteCartItem(product.id)"
                                    type="button"
                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div
                      class="flex justify-between text-base font-medium text-gray-900"
                    >
                      <p>Enviar cotizacion</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      Envia un mensaje con los productos para mas detalles
                    </p>
                    <div class="mt-6 flex justify-center w-full">
                      <button
                        @click="makeQuotation"
                        class="flex items-center w-full justify-center rounded-md border border-transparent bg-medium-blue px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-medium-blue/80"
                      >
                        <span
                          v-if="isLoading"
                          class="items-center object-center"
                        >
                          <svg
                            class="w-4 mr-2 h-4 inline-flex border-2 mx-auto border-white border-l-medium-blue rounded-full animate-spin"
                          ></svg
                          >Realizar cotizacion</span
                        >
                        <span v-else>Realizar cotizacion</span>
                      </button>
                    </div>
                    <div
                      class="mt-6 flex justify-center text-center text-sm text-gray-500"
                    >
                      <p>
                        o{{ " " }}
                        <button
                          type="button"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                          @click="closeCart"
                        >
                          Continuar comprando
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  computed,
  watchEffect,
  onMounted,
  onUnmounted,
  watch,
} from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useStore } from "vuex";
import { data } from "autoprefixer";

defineProps({
  open: Boolean,
});

const store = useStore();
const cartItems = computed(() => store.state.cartList);
const dataCart = ref([]);
const isLoading = ref(false);

watchEffect(() => {
  dataCart.value = cartItems.value;
});

const deleteCartItem = (data) => {
  try {
    store.dispatch("REMOVE_FROM_CART", { data });
  } catch (error) {
    console.error(error);
  }
};

const makeQuotation = () => {
  const payload = dataCart.value;
  try {
    store.dispatch("MAKE_QUOTATION", { payload });
  } catch (error) {
    console.error(error);
  }
};

const emit = defineEmits(["close-cart"]);
const closeCart = () => {
  emit("close-cart");
};
</script>
