// 是通过拿到环境参数来控制向project.js文件写入一个运行的名称
let projectName = process.argv[2]
let fs = require('fs')
// 写入
fs.writeFileSync('./build/project.js', `exports.name = '${projectName}'`)

let exec = require('child_process').execSync
exec('vue-cli-service build', { stdio: 'inherit' })
