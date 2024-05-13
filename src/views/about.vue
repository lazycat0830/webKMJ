<template>
  <TopImg :img="headerImg" title="關於我們" titleEn="About"></TopImg>
  <n-flex justify="center">
    <n-flex style="width: 80%; padding: 20px 0px">
      <AboutUs />

      <Supplier />
    </n-flex>
  </n-flex>
</template>
<script setup>
import TopImg from "./components/TopImg.vue";
import headerImg from "/about.jpg";
import AboutUs from "./components/about/AboutUs.vue";
import Supplier from "./components/about/Supplier.vue";
</script>
