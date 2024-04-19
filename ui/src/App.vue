<script setup>
import PdfPreview from './components/PdfPreview.vue'
</script>

<template>
  <div class="app-container">
    <div class="title">
      <h1>Owen Pdf Preview</h1>
      <img src="/src/assets/vue.svg" alt="">
    </div>
    <PdfPreview msg="Owen Pdf Preview" />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin: 0 auto;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 200px;
  height: 200px;
}
</style>
