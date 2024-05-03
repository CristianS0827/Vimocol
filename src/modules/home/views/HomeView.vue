<template>
      <CategoryPreview
    :open="openPreview"
    @close-preview="closeCategoryPreview"
    :category="categorySelected"
  />
  <div class="justify-center items-center object-center">
    <div class="h-full py-24 w-full px-4">
      <div>
        <Swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="10"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide
            v-on:click="openCategoryPreview(category)"
            @click="openPreview"
            v-for="category in categoryList"
            :key="category.id"
          >
            <img
              :src="category.Cat_image"
              class="w-full rounded-lg shadow-lg h-[600px]"
            />

            <div class="text-center mt-4 text-xl justify-center">
              {{ category.Category_name }}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import CategoryPreview from "../common/CategoryPreview.vue";

const store = useStore();

const openPreview = ref(false);
const categorySelected = ref(null);

const openCategoryPreview = (data) => {
  openPreview.value = true;
  categorySelected.value = data;
};

const closeCategoryPreview = () => {
  openPreview.value = false;
};

onMounted(() => {
  getCategories();
});

const categoryList = computed(() => store.state.categoryList);

const getCategories = async () => {
  store.dispatch("GET_CATEGORY_LIST");
};

const onSwiper = (swiper) => {};
const onSlideChange = (swiper) => {};
const modules = [Navigation, Pagination, Scrollbar];
</script>

<style scoped>
:deep(.swiper-pagination) {
  bottom: 50px; /* Ajusta este valor según necesites */
}
</style>
