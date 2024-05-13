<template>
  <n-grid
    :x-gap="15"
    :y-gap="15"
    cols="1 s:3 m:4 l:5 xl:6 2xl:6"
    responsive="screen"
  >
    <n-grid-item v-for="i in 10" :key="i">
      <n-card title="358612" hoverable>
        <template #cover>
          <img :src="shoseImg" />
        </template>
        $250
      </n-card>
    </n-grid-item>
  </n-grid>
</template>
<script setup>
import shoseImg from "../../../assets/P0000100042586_3_118929.jpg";
</script>
