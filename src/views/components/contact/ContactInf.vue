<template>
  <n-flex vertical align="center" style="gap: 0px">
    <span style="font-size: 30px">聯絡資訊</span>
    <span style="font-size: 15px">CONTACT INF</span>
  </n-flex>
  <n-grid cols="2" item-responsive>
    <n-grid-item span="0 500:1 ">
      <div style="width: 80%">
        <img src="/src/assets/selling shoes.jpg" />
      </div>
    </n-grid-item>
    <n-grid-item span="2 500:1 " style="display: flex; justify-content: end">
      <n-card title="" :bordered="false">
        <n-flex
          vertical
          justify="center"
          style="height: 100%; margin: 20px 0px; width: 95%"
          class="InfText"
        >
          <div><span>電話：</span>089-329500</div>
          <div><span>地址：</span>台東縣台東市正氣路195號</div>
          <div><span>營業時間：</span>10:00~22:00</div>
          <n-flex vertical>
            <span>網路商店：</span>
            <div><span>蝦皮：</span>康美佳鞋城</div>
            <div><span>Yahoo：</span>康美佳鞋城</div>
            <div><span>露天：</span>康美佳鞋城</div>
          </n-flex>
        </n-flex>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<style scoped>
.InfText {
  font-size: 17px;
}
.InfText span {
  font-size: 18px;
  font-weight: 600;
}
</style>
