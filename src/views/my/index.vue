<template>
  <div>
    <h2>我的</h2>
    <router-link to="/my/order">
      <h3>跳转到订单列表</h3>
    </router-link>
    <router-link to="/my/wallet">
      <h3>跳转到钱包页面</h3>
    </router-link>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: 'My'
}
</script>

<style lang="less" scoped>
h2{
  margin-bottom: 20px;
}
</style>
