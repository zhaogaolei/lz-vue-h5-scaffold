<template>
  <div>
    <router-view />
    <footer class="foot">
      <div
        class="item"
        v-for="item in foot"
        :key="item.id"
      >
        <router-link :to="item.to">
          {{ item.name }}
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TabLayoutView',
  data () {
    return {
      active: 0,
      foot: [
        { id: '0', name: '首页', to: '/home' },
        { id: '1', name: '会员', to: '/vip' },
        { id: '2', name: '朋友', to: '/friend' },
        { id: '3', name: '我的', to: '/my' }
      ]
    }
  },
  computed: {},
  methods: {},
  created () { }
}
</script>

<style scoped lang='less'>
.foot {
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  height: 49px;
  text-align: center;
  background: #fff;
  z-index: 999;
  max-width: 100000px !important;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #e7e5e5;
    transform: scaleY(0.5);
  }
  .item {
    width: 100%;
  }
  .active {
    span:nth-child(1) {
      font-size: 18px;
      font-weight: bolder;
    }
  }
  a {
    color: #333;
    display: flex;
    flex-direction: column;
    padding: 8px;
    height: 100%;
    span:nth-child(2) {
      font-size: 16px;
    }
  }
}
</style>
