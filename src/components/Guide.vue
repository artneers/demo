<template>
  <div>
    <el-tour
      v-model="open"
      :show-close="false"
      @change="handleChange"
    >
      <el-tour-step
        v-for="(item, index) in props.data"
        :key="index"
        :target="item.target"
        :title="item.title ? item.title : `第${currentStep}步`"
        :description="item.description"
        :prev-button-props="{
          children: '上一步',
          onClick: handlePrevClick
        }"
        :next-button-props="{
          children: nextBtnName,
          onClick: handleNextClick
        }"
      />
      <template #indicators>
        <el-button size="small" @click="handleSkip">跳过</el-button>
      </template>
    </el-tour>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";


const props = defineProps(['data'])
const emits = defineEmits(['change', 'prev', 'next'])
const open = ref(true);
const currentStep = ref(0);

const nextBtnName = computed(() => {
  let name = ''
  if(!currentStep.value) {
    name =  '开始'
  } else if(currentStep.value === props.data.length - 1) {
    name = '完成'
  } else {
    name = `下一步（${currentStep.value} / ${props.data.length - 1}）`
  }
  return name
})

const handleChange = (step) => {
  currentStep.value = step
  emits('change')
}

const handleSkip = () => {
  open.value = false
}

const handlePrevClick = () => {
  emits('prev')
}

const handleNextClick = () => {
  emits('next')
}
</script>

<style scoped></style>
