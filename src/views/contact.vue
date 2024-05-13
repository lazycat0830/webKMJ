<template>
  <TopImg :img="headerImg" title="聯絡我們" titleEn="Contact"></TopImg>
  <n-flex justify="center">
    <n-flex vertical style="width: 80%; padding: 20px 0px">
      <ContactInf />
      <ComMap />
      <n-grid cols="1 s:1 m:2 l:2 xl:2 2xl:2" responsive="screen">
        <n-grid-item>
          <div class="light-green">
            <div class="toLine" style="">
              <img :src="FBImg" />
            </div>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="green">
            <div class="toFB" style="">
              <img :src="LineImg" />
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </n-flex>
  </n-flex>
</template>

<script setup>
import TopImg from "./components/TopImg.vue";
import headerImg from "/about.jpg";
import ContactInf from "./components/contact/ContactInf.vue";
import ComMap from "./components/contact/ComMap.vue";
import LineImg from "../assets/line.png";
import FBImg from "../assets/facebook.png";
</script>
<!-- <style>
@import url("./scss/contact.scss");
</style> -->

<style>
@import url("./scss/contact.scss");
</style>
