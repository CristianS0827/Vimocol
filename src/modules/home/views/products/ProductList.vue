<template>
  <div class="px-8">
    <h1 class="mt-10 text-xl font-medium">Categoria impsum</h1>
    <div class="grid grid-cols-1 gap-6 mt-4">
      <div
        v-for="(product, index) in productList"
        :key="product.id"
        :class="{ 'bg-soft-blue': index % 2, 'bg-white': !(index % 2) }"
        class="shadow-sm rounded-md p-4"
      >
        <div
          class="p-10"
          :class="{
            'flex-row-reverse ': index % 2,
            flex: true,
            'justify-between': true,
          }"
        >
          <div class="w-[44%]">
            <h2
              :class="{
                'text-white font-semibold': index % 2,
                'text-black': !(index % 2),
              }"
              class="text-lg font-medium mb-8"
            >
              {{ product.Product_name }}
            </h2>
            <p
              :class="{
                'text-white ': index % 2,
                'text-gray-500': !(index % 2),
              }"
              class=""
            >
              {{ product.Description }} Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <div class="mt-6 ">
              <button @click="addToCart(product)" :class="{'bg-soft-blue px-4 py-2  text-white rounded hover:bg-soft-blue/80': !(index % 2),
                'bg-white px-4 py-2  text-medium-blue rounded hover:bg-gray-100': index % 2
              }">
                Agregar a carrito
              </button>

            </div>  
          </div>
          <div class="w-3/6">
            <figure>
              <img
                :src="product.Images"
                alt="product.name"
                class="w-full h-[700px] object-cover rounded-md"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

onMounted(() => {
  getProductList();
});

const paramRoute = useRouter().currentRoute.value.params;

const productList = computed(() => store.state.productList);
const cartList = computed(() => store.state.cartList);

const store = useStore();
const getProductList = async () => {
  store.dispatch("GET_PRODUCT_LIST", { categorySlug: paramRoute.category });
};

const addToCart = (data) => {
  try {
    store.dispatch("ADD_TO_CART", { data });
  } catch (error) {
    console.error(error);
  }
};



</script>

<style></style>
