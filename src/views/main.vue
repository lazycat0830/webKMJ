<template>
  <n-flex justify="center">
    <Banner />
    <n-flex vertical style="width: 80%; padding: 20px 0px">
      <About />
      <ProductType />
      <n-flex justify="center"><n-h1>最新消息</n-h1></n-flex>
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
    </n-flex>
    <Footer></Footer>
  </n-flex>
</template>
<script setup>
import Banner from "./components/main/Banner.vue";
import Footer from "./footer.vue";
import About from "./components/about/AboutUs.vue";
import ProductType from "./components/main/ProductType.vue";
</script>
