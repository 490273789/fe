// node 的全局对象global
// 在node中可以直接访问global
// 特点：每个文件都是一个模块，模块外面包了匿名函数
// module、export、require、__dirname、__filename
console.log(this === global)
console.log(this === module.exports)
;(function () {
  console.log(this === global)
})()

// console.log(global)
// console.log(process)
// global中的属性叫全局属性，加上 module、export、require、__dirname、__filename 叫全局对象
// process 进程 开启很多个线程
// 1）判断平台：windows - win32   mac - darwin
// 应用：windows的目录和mac的目录不一样，判断后分别进行处理
console.log(process.platform)

// 2）argv 代表用户传递的参数，前两个是默认参数，没有实际意义
// 应用：执行node的方法： 命令 + 文件名执行 + 参数（node index.js --port 3000 --config aaa）
// 收集用户的参数：process.argv.slice(2) - [--port,3000,--config,aaa]
console.log(process.argv.slice(2))
// 将收集到的参数转化为对象的实现原理 (一般情况下都使用第三方插件库)
const config = process.argv.slice(2).reduce((pre, current, index, arr) => {
  if (current.includes('--')) {
    pre[current.slice(2)] = arr[index + 1]
  }
  return pre
}, {})
console.log(config)

// Buffer 缓存区 读取文件 内存中的数据
// 都是二进制的，在buffer里的数据都是16进制的
// clearInterval setIntercal
// clearTimeout setTimeout
// clearImmediate setImmediate

// 浏览器中的解析
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// node中的解析
// script start
// async1 start
// async2
// promise1
// script end
// promise2
// async1 end
// setTimeout
