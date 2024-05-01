<template>
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
            v-for="category in categoryList"
            :key="category.id"
            class="rounded-lg shadow-lg"
          >
            <img
              :src="category.image"
              class="w-full rounded-lg shadow-lg h-auto"
            />
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

const store = useStore();

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

<style></style>
