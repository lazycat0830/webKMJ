<template>
  <n-flex justify="center" style="width: 100%">
    <n-h1>供應商</n-h1>
    <n-data-table
      size="small"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    >
    </n-data-table>
  </n-flex>
</template>
<script setup>
import { ref, h } from "vue";
import imglog from "../../../assets/LINE_Brand_icon.png";

const columns = ref([
  {
    title: "Logo",
    key: "img",
    render(row) {
      return h("img", {
        src: row.img,
        style: {
          width: "50px",
        },
      });
    },
  },
  {
    title: "供應商",
    key: "title",
  },
]);
const pagination = ref({
  pageSize: 5,
});

const data = ref([
  { img: imglog, title: "母子鱷魚" },
  { img: imglog, title: "G.P" },
  { img: imglog, title: "愛樂跑" },
]);
</script>
