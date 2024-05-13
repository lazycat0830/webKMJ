<template>
  <n-carousel
    effect="slide"
    dot-type="line"
    :centered-slides="'100%'"
    :slides-per-view="1"
    dot-placement="bottom"
    draggable
    style="height: 600px"
  >
    <n-carousel-item
      v-for="item in imgList"
      :key="item"
      :style="{ width: '100%' }"
    >
      <img class="carousel-img" :src="item.src" />
    </n-carousel-item>
  </n-carousel>
</template>

<script setup>
import { ref } from "vue";

const imgList = ref([
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
  },
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
  },
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
  },
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
  },
]);
</script>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
