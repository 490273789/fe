let r = require('./03-module-export')

// 实现原理 - 执行module.exports文件中导入的自执行函数
// (function () {
//     let hello = 'hello'
//     module.exports = hello
//     return module.exports
// })()

console.log(r)