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

// 引导组件开启状态
const open = ref(true);

// 当前步数，从0开始，由于第0步是开始语，后面的步数可以正好对应
const currentStep = ref(0);

// 动态修改下一步按钮名称
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

// 步数切换时触发
const handleChange = (step) => {
  currentStep.value = step
  emits('change')
}

// 点击跳过按钮时触发
const handleSkip = () => {
  open.value = false
}

// 点击上一步按钮时触发
const handlePrevClick = () => {
  emits('prev')
}

// 点击下一步按钮时触发
const handleNextClick = () => {
  emits('next')
}
</script>

<style scoped></style>
