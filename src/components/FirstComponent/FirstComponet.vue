<template>
  <div class="hello">
    <h2>字符串</h2>
    <h3>{{ msg }}</h3>
    <h2>接口列表（数组）：</h2>
    <h3>{{apiList}}</h3>
    <h2>全局变量（对象）：</h2>
    <h3>{{globalVar}}</h3>
  </div>
</template>

<script>
export default {
  name: 'FirstComponet',
  props: {
    msg: String,
    apiList: Array,
    globalVar: Object
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 0 0 40px 0;
}
h3,h4 {
  color: #42b983;
}
</style>
