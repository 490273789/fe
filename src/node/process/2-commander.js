// 认识一个新的第三方插件：commander 命令行的管家 帮你提供一个--help
const { program } = require('commander')
const chalk = require('chalk')
// 解析用户的参数， 默认提供了 --help
// 配置命令，输入一些命令后，执行内容
program
  .command('create')
  .alias('a')
  .description('create project')
  .action(() => {
    console.log('excute action')
  })

// 配置属性给当代码传递参数
program.option('-p, --port <val>', 'set port').version('1.0.0')

// 监听--help事件
program.on('--help', () => {
  console.log('\r\nExamples')
  console.log('node 1.js --help')
  console.log('node 1.js create ' + chalk.green('project'))
})
program.parse(process.argv)
const options = program.opts()
console.log(options.port)
