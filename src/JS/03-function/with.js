let message = 'global message'

const obj = { message: 'obj message' }

function foo() {
  let message = 'function message'
  // with会形成单独的作用域，参数是作用域链
  // 变量查找顺序： obj -> function -> global
  // 在严格模式下不能使用
  with (obj) {
    console.log(message)
  }
}

foo()

// eval 是一个全局函数，可以吧一段字符串当做代码执行
// 缺点：
// 可读性差
// 字符串容易被攻击
// 不能被js引擎优化，性能差
// 严格模式下age属性不会添加到全局
let jsString = `var age = '18'; console.log(age)`

eval(jsString)


// 严格模式
// 可以通过抛出错误来消除一下原有的静默错误
true.foo = 'abc' // 静默错误

// 不需要对一些特殊的语法进行处理
let obj = {}
Object.defineProperty(obj, a , {
  writable: false
})
obj.a = 'sn' // 严格模式会报错， 非严格模式会忽略

//禁用了在ECMAScript未来版本中可能定义的一些语法（一些保留字的使用）
