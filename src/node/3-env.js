// 在哪里执行这个文件,目录就是那里，代表的执行文件的目录
console.log(process.cwd())

// env 环境变量, 可以根据环境变量的不同，执行不同的结果
// console.log(process.env)
// 设置临时的变量： mac - export  windows - set  cress-env 一个第三方包兼容处理mac和windows
// 全局变量： mac ~/.bash_profile
// eg： export a=1 && node 2.env
// 执行： export NODE_ENV=development && node 3-env.js
let url = ''
if (process.env.NODE_ENV === 'development') {
  url = 'dev'
} else {
  url = 'www'
}

console.log(url)

// node中的事件环:每执行完一个宏任务都回去清空微任务队列
// nextTick node中的微任务
// nextTick执行优先级会比Promise.then()高
const promise = Promise.resolve()
promise.then(() => {
  console.log('promise.then()')
})
process.nextTick(() => {
  console.log('process.nextTick()')
})

// 1、受node的性能影响不一定谁在前面执行
setTimeout(() => {
  console.log('setTime1')
}, 0)

setImmediate(() => {
  console.log('setImmediate1')
})

// 受调用的上下文影响setTimeout不一定在前面
let fs = require('fs')
fs.readFile('./test.js', () => {
  setTimeout(() => {
    console.log('setTime2')
  }, 0)
  // 先执行
  setImmediate(() => {
    console.log('setImmediate2')
  })
})
