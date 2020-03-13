const path = require('path')
const VconsolePlugin = require('vconsole-webpack-plugin')
const config = require('./build/config')

const isProd = () => {
  return process.env.NODE_ENV === 'production'
}
function resolve (dir) {
  return path.join(__dirname, dir)
}
const vueConfig = {
  pages: config.pages,
  outputDir: config.outputDir,
  configureWebpack: {
    devtool: 'source-map', // 配置后，开发环境方便调试
    plugins: [
      new VconsolePlugin({
        filter: [],
        enable: false//! isProd()
      })
    ]
  },
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: isProd(),
  // runtimeCompiler: true,
  chainWebpack: (config) => {
    // config.resolve.alias.set('vue', 'vue/dist/vue.esm.js')
    config.resolve.alias
      .set('zmjd-mobile', resolve('zmjd-mobile/index.js'))
  }

}

module.exports = vueConfig
