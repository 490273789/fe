// 浏览器的event loop
// 微任务 micro：事件、ajax、script、requestFrameAnimation、setTimeout、setInterval、setImmediate、MessageChannel、I/O、UI rendering

// 宏任务 macro：Promise.then
// 当前主栈全部执行完毕后 -> 清空微任务 -> 会取出一个宏任务 —> 执行完毕后 继续清空微任务 -> 无限循环

// vue的nextTicket 做一个缓存机制
// 判断顺序 
// 判断是否是原生方法：typeof func === 'function /native code/.test(func.tiString())
// 1、Promise  - 微
// 2、MutationObserver - 微 - H5
// 3、setImmediate - 宏 - IE 
// 4、setTimeout - 宏
var a = 1
let p = Promise.resolve()
p.then(data=> {
    console.log(a)
})
a = 100

// node11版本的事件循环和浏览器一样
