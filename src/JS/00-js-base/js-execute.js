var name = 'wsn'
var num1 = 1
var num2 = 2
var result = num1 + num2

function foo () {
  console.log('函数')
}
/**
 * 全局代码执行
 * 1. 编译阶段， 代码被解析，v8引擎内部会帮助我们创建一个对象Global Object
 * 2. 运行代码
 *  2.1 v8为了执行代码，内部会有一个执行上下文栈（Execution Context Stack， ECStack， 函数调用栈）
 *  2.2 为了全局代码能够正常运行，需要创建全局执行上下文（Global Execution Context， 全局代码需要执行时才会被创建）
 *  2.3 GEC进 入ECStack
 */
var globalObject = {
  window: globalObject,
  String: "",
  Date: "",
  setTimeout: ""
}
