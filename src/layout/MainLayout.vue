<template>
  <n-space vertical size="large">
    <n-layout style="height: 100vh">
      <n-layout-header bordered>
        <n-space justify="space-between" align="center" size="large">
          <div>LOGO</div>
          <n-menu
            mode="horizontal"
            :options="nav"
            :style="{ width: 'auto', color: '#ddd' }"
          />
        </n-space>
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 100px">
        <n-layout-content :native-scrollbar="false">
          <RouterView />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-space>
</template>
<script setup>
import { ref, onMounted } from "vue";
import menuOptions from "@/stores/menu";
import { RouterView } from "vue-router";

const nav = ref([]);
onMounted(() => {
  nav.value = menuOptions;
});
</script>
<style>
@import url("./MainLayout.scss");
</style>
