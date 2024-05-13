<template>
  <TopImg :img="headerImg" title="最新消息" titleEn="News"></TopImg>
  <n-flex justify="center">
    <n-flex vertical style="width: 80%; padding: 20px 0px">
      <n-list hoverable clickable bordered="true">
        <n-list-item>
          <template #prefix>
            2024<br />
            4/3
          </template>
          <n-thing title="母親節促銷"> </n-thing>
          <template #suffix>
            <n-button circle color="#8a2be2" ghost>
              <template #icon>
                <font-awesome-icon icon="arrow-right" />
              </template>
            </n-button>
          </template>
        </n-list-item>
      </n-list>
    </n-flex>
  </n-flex>
</template>
<script setup>
import TopImg from "./components/TopImg.vue";
import headerImg from "/about.jpg";
import axios from "axios";
const x = axios("https://randomuser.me/api/");
x.then(() => console.log(x));
</script>
