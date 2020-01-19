const VconsolePlugin = require('vconsole-webpack-plugin')

const isProd = () => {
  return process.env.NODE_ENV === 'production'
}

const vueConfig = {
  configureWebpack: {
    devtool: 'source-map', // 配置后，开发环境方便调试
    plugins: [
      new VconsolePlugin({
        filter: [],
        enable: !isProd()
      })
    ]
  },
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: isProd()
}

module.exports = vueConfig
