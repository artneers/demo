<template>
  <div id="app">
    <SearchForm :config="config" :options="options" @submit="getSearchResult" />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'

export default {
  name: 'App',
  components: {
    SearchForm
  },
  data() {
    return {
      config: [
        {
          type: 'input',
          label: '用户名称',
          name: 'username',
        },
        {
          type: 'select',
          label: '用户状态',
          name: 'status',
          loadOption: () => this.getStatusOption
        }
      ],
      options: {}
    }
  },
  methods: {
    getSearchResult(res) {
      console.log(res, '筛选的条件为：')
    },
    getStatusOption() {
      // 筛选项由一个异步请求整体返回，模拟后端接口
      return Promise.resolve([
        {
          label: '正常',
          value: 0
        },
        {
          label: '停用',
          value: 1
        }
      ])
    }
  }
}
</script>
