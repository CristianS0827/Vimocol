<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="closeAboutUs">
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
          class="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
              class="relative transform  overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all h-[80%] w-[60%]"
            >
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="closeUbication"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
                <div
                  class="mt-3 w-full min-h-full text-center sm:ml-4 sm:mt-0 sm:text-left"
                >
                  <DialogTitle
                    as="h3"
                    class="text-lg font-semibold leading-6 text-gray-900"
                    >Ubicacion</DialogTitle
                  >
                  <div class="mt-2 min-w-full h-full flex">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1715777587175!6m8!1m7!1skLpbI4tuVx-xjhXT6GTajg!2m2!1d4.13270874607398!2d-73.60926979262791!3f194.16479752269817!4f14.10052824496303!5f0.7820865974627469"
                      class="w-full "
                      height="690"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
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
});

const emit = defineEmits(["close-ubication"]);

const closeUbication = () => {
  emit("close-ubication");
};
</script>
