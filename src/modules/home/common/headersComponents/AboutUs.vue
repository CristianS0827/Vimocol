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
              class="relative transform overflow-hidden rounded-lg overflow-y-auto bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all max-h-[70%] w-[40%]"
            >
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="closeAboutUs"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-xl text-center font-semibold leading-6 text-gray-900"
                    >Misión</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-lg text-gray-500">
                      En Vimocol, nos dedicamos a transformar espacios con
                      elegancia y funcionalidad. Nuestro compromiso es ofrecer
                      soluciones en aluminio y vidrio que superen las
                      expectativas de nuestros clientes, creando ambientes
                      estéticos y seguros.
                    </p>
                  </div>
                  <DialogTitle
                    as="h3"
                    class="text-xl text-center mt-8 font-semibold leading-6 text-gray-900"
                    >Visión</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-lg text-gray-500">
                      Ser líderes en el mercado de la ornamentación con aluminio
                      y vidrio, reconocidos por nuestra calidad, innovación y
                      servicio excepcional. Queremos ser la primera opción para
                      quienes buscan soluciones creativas y duraderas en diseño
                      y construcción.
                    </p>
                  </div>
                  <DialogTitle
                    as="h3"
                    class="text-xl text-center mt-8 font-semibold leading-6 text-gray-900"
                    >Nosotros</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-lg text-gray-500">
                      En Vimocol, nos apasiona la transformación de espacios a
                      través de soluciones en aluminio y vidrio. Desde nuestra
                      fundación en 2010 en Villavicencio, hemos trabajado en
                      proyectos residenciales, comerciales e industriales.<br>
                      Nuestro equipo altamente capacitado se dedica a diseñar,
                      fabricar e instalar sistemas de ventanas, puertas,
                      fachadas y estructuras en aluminio y vidrio. Nos
                      enorgullece ofrecer calidad, innovación y servicio
                      personalizado a nuestros clientes.
                    </p>
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
import { ref, defineEmits, defineProps } from "vue";
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

const emit = defineEmits(["close-aboutus"]);

const closeAboutUs = () => {
  emit("close-aboutus");
};
</script>
