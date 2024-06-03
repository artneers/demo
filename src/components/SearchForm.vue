<template>
  <div class="container">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <template v-for="(item, index) in config">
        <el-form-item v-if="item.type === 'select'" :label="item.label">
          <el-select v-model="formData[item.name]" :placeholder="`请选择${item.label}`" @visible-change="getOptions">
            <el-option v-for="option in options[item.name]" :label="option.label" :value="option.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-else-if="item.type === 'input'" :label="item.label">
          <el-input v-model="formData[item.name]" :placeholder="`请输入${item.label}`"></el-input>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button @click="onReset">重置</el-button>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    config: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      formData: {},
      options: {},
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.formData)
    },
    onReset() {
      this.formData = {}
    },
    getOptions(visible) {
      // 下拉列表隐藏时不需要刷新筛选项
      if(!visible) return;
      this.config.forEach(async item => {
        if(item.loadOption) {
          const option = await item.loadOption()()
          this.$set(this.options, item.name, option)
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
}
</style>
