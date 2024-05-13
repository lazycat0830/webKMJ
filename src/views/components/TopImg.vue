<template>
  <div id="TopImg">
    <img :src="props.img" />
    <div
      class="TopTitle"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
    >
      <n-gradient-text
        :gradient="{
          from: '#111',
          to: '#111',
        }"
        size="40"
        >{{ props.title }}</n-gradient-text
      >
      <n-gradient-text
        :gradient="{
          from: '#111',
          to: '#111',
        }"
        size="25"
        >{{ props.titleEn }}</n-gradient-text
      >
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  img: { type: String, default: "" },
  title: { type: String, default: "" },
  titleEn: { type: String, default: "" },
});
</script>
<style>
@import url("../scss/components/TopImg.scss");
</style>
