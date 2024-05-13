<template>
  <TopImg :img="headerImg" title="產品" titleEn="Product"></TopImg>
  <n-flex justify="center">
    <n-flex vertical style="width: 90%; padding: 20px 0px">
      <n-flex style="gap: 0px">
        <n-anchor show-rail="true" show-background="true" style="width: 20%">
          <n-anchor-link title="鞋子">
            <n-anchor-link title="男鞋" />
            <n-anchor-link title="女鞋" />
            <n-anchor-link title="童鞋" />
          </n-anchor-link>
          <n-anchor-link title="其他"></n-anchor-link>
        </n-anchor>
        <div style="width: 80%">
          <n-h2>男鞋</n-h2>
          <ProductContent />
        </div>
      </n-flex>
      <n-flex justify="center" style="padding: 15px 0px"
        ><n-pagination v-model:page="page" :page-count="100"
      /></n-flex>
    </n-flex>
  </n-flex>
</template>

<script setup>
import TopImg from "./components/TopImg.vue";
import headerImg from "/about.jpg";
import ProductContent from "./components/product/ProductContent.vue";
import { ref } from "vue";

const page = ref(2);
</script>
