<template>
  <div class="home">
    <h2>主页</h2>
    <h3>API：{{ apiList.join() }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
// 接口引入
import API from '@/services'
export default {
  name: 'Home',
  data () {
    return {
      apiList: Object.keys(API),
      globalVar: process.env
    }
  },
  mounted () {
    console.log('接口服务列表：', API)
    console.log('全局变量', process.env)
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.home{
  margin-bottom: 54px;
}
</style>
