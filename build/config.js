
const project = require('./project')
console.log('currentPrject========>', project)
const config = {
  zmjd: {
    pages: {
      index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    outputDir: 'dist'

  },
  example: {
    pages: {
      index: {
        entry: 'example/main.js',
        template: 'example/index.html',
        filename: 'index.html'
      }
    },
    outputDir: 'example/dist'

  }
}

// 控制导出哪个项目下的配置
const configObj = config[project.name]
module.exports = configObj
