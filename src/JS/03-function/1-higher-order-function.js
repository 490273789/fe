// js里最核心的技能是回调函数
// 高阶函数
// 1、函数当做参数传递给另一个函数
// 2、一个函数返还另一函数

// 监测数据类型 typeof object/array/null Object.prototype.toString.call()
// instanceof constructor
// AOP  面向切片  装饰器模式  把核心抽离出来  在核心的基础上增加功能

// 重写原型上的方法（参数是函数，返回值是函数）高阶函数
Function.prototype.before = function (beforeFn) {
  return (...args) => {
    beforeFn()
    this(...args) //箭头函数this指向before-->before的this是say函数say(...args)
  }
}
// 核心的方法
const say = (...args) => {
  console.log('说话:', ...args)
}

// 给核心方法新增功能
const newSay = say.before(() => {
  console.log('您好')
})

const newSay1 = say.before(() => {
  console.log('天气：')
})

newSay('校长')
newSay1('多云转晴', '一会阳光普照')
// 您好
// 说话: [ 1, 2, 3 ]
