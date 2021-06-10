

let hello = 'hello'
let hello1 = 'hello1'

module.exports = hello 

// 实现原理 - 创建一个自执行函数导出
// (function () {
//     let hello = 'hello'
//     module.exports = hello
//     return module.exports
// })

const a = {a: '1'}

function aaa (a) {
    a.a = 2
    return a
}

console.log(aaa(a))
console.log(a) 