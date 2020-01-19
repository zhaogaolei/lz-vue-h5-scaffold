const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    pxtorem({
      rootValue: 37.5,
      propList: ['*'],
      // selectorBlackList: [/^html$/],
      minPixelValue: 1 // 设置要替换的最小像素值(1px会被转rem)。 默认0,如果个别地方不想转化px。可以简单的使用大写的PX或Px
    }),
    autoprefixer
  ]
}
