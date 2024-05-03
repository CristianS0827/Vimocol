<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full justify-center p-4 text-center items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg dialog-style bg-white px-4 w-[85%] pb-4 pt-5 text-left shadow-xl transition-all"
            >
              <div
                class="absolute right-4 bottom-7 hidden pr-4 pt-4 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-medium-blue px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-medium-blue/80 sm:ml-3 sm:w-auto"
                  @click="watchProducts(category.Slug)"
                >
                  Ver productos
                </button>
              </div>
              <div class="bg-gray-200 rounded w-full">
                <img
                  :src="category.Cat_image"
                  alt="category.name"
                  class="w-full h-[800px] object-contain rounded-md"
                />
              </div>
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  class="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="closePreview"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/vue/24/outline";

defineProps({
  open: Boolean,
  category: Object,
});

const router = useRouter();
const emit = defineEmits(["close-preview"]);

const closePreview = () => {
  emit("close-preview");
};

const watchProducts = (data) => {
  router.push({ name: "ProductList", params: { category: data } });
};
</script>
<style scoped></style>
