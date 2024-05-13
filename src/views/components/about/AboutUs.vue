<template>
  <n-grid cols="1 s:1 m:2 l:2 xl:2 2xl:2" responsive="screen">
    <n-grid-item style="display: flex; justify-content: center">
      <n-image :src="aboutImg" style="max-height: 400px" />
    </n-grid-item>
    <n-grid-item>
      <n-h1>關於我們</n-h1>
      <n-p style="font-size: 18px">
        我們是一家擁有40年歷史的老店，但現在我們正全新出發！我們的目標是不斷更新我們的產品和服務，以跟上流行趨勢，讓您總能找到自己喜歡的東西。無論您是年輕人還是年長者，我們都有適合您的產品。
      </n-p>
    </n-grid-item>
  </n-grid>
</template>

<script setup>
import aboutImg from "../../../assets/InStore.jpg";
</script>
