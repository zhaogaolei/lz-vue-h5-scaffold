
const myRouter = [
  {
    path: '/my/order',
    name: 'myOrder',
    meta: {
      title: '订单'
    },
    component: () => import(/* webpackChunkName: "order" */ '../views/my/order')
  },
  {
    path: '/my/wallet',
    name: 'myWallet',
    meta: {
      title: '钱包'
    },
    component: () => import(/* webpackChunkName: "wallet" */ '../views/my/wallet')
  }
]

export default myRouter
