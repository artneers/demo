<template>
  <div class="container">
    <!-- 页面元素 -->
    <button id="guideRef1" class="html-button">html</button>
    <button id="guideRef2" class="css-button">css</button>
    <button id="guideRef3" class="js-button">javascript</button>
    <button id="guideRef4" class="mvvm-button">vue/react</button>
    <!-- 引导组件 -->
    <Guide v-model="open" :data="guideOptions" />
  </div>
</template>

<script setup>
import Guide from './components/Guide.vue'
import { guideOptions } from './config/guide.json'

// 声明操作指引开启状态（为了演示方便，默认开启）
const open = defineModel({
  default: true
});
</script>

<style scoped>
.container {
  position: relative;
}

.container>button {
  position: absolute;
  width: 200px;
  height: 50px;
}

.html-button {
  top: 200px;
  left: 200px;
  background-color: burlywood;
}

.css-button {
  top: 400px;
  left: 400px;
  background-color: olivedrab;
}

.js-button {
  top: 600px;
  left: 600px;
  background-color: yellow;
}

.mvvm-button {
  top: 300px;
  left: 1000px;
  background-color: greenyellow;
}
</style>
