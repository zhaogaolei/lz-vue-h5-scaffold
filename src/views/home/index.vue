<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../../assets/logo.png"
    >
    <FirstComponet
      msg="Welcome to Your Vue.js App"
      :api-list="apiList"
      :global-var="globalVar"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstComponet from '@/components/FirstComponent'
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
  components: {
    FirstComponet
  },
  mounted () {
    console.log('接口服务列表：', API)
    console.log('全局变量', process.env)
  }
}
</script>

<style lang="less" scoped>
img{
  width: 200px;
}
</style>
