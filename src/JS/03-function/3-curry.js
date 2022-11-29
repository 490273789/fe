// 柯里化： 将一个函数拆分成多个函数
// 值传递给函数一部分参数来调用它，让他返回一个函数去处理剩余的参数，这个过程称为柯里化
// 作用：
// 1、让函数的职责单一
// 2、
function foo (m,n,x) {
  return m + n + x
}

function fooCurry(m) {
  return function(n) {
    return function (x) {
      return m + n + x
    }
  }
}
const result1 = fooCurry(1)(2)(3)

const result2 = m => n => x => m + n + x

// 高阶函数包含柯里化
const utils = {}

// 获取方法列表
// 闭包： 函数执行的时候，会有一个不销毁的内存空间
const typeMethods = (function () {
  const checkType = (type) => {
    return (content) => {
      // 闭包 - type会保存在上下文中
      return Object.prototype.toString.call(content) === `[object ${type}]`
    }
  }
  const methodsList = {}
  const types = ['Number', 'String', 'Boolean', 'Undefined', 'Null', 'Object', 'Symbol']
  types.forEach((type) => {
    methodsList['is' + type] = checkType(type)
  })
  return methodsList
})()

// 将方法添加到utils中
Object.assign(utils, typeMethods)

console.log(utils.isString('123'))
console.log(utils.isNumber(123))
console.log(utils.isBoolean(false))
console.log(utils.isNull(null))
console.log(utils.isUndefined(undefined))

// 实现函数的柯里化

// 通用的柯里化
const curring = (fn, arr = []) => {
  let len = fn.length
  return (...args) => {
    arr = arr.concat(args)
    if (arr.length < len) {
      return curring(fn, arr)
    }
    return fn(...arr)
  }
}

// curring使用一
const add = (a, b, c, d, e) => {
  return a + b + c + d + e
}
let result1 = curring(add)(1)(2)(3)(4)(5)
let result2 = curring(add)(1, 2, 3)(4)(5)
console.log(result1)
console.log(result2)

// curring使用二，将check拆分
const checkType = (type, content) => {
  return Object.prototype.toString.call(content) === `[object ${type}]`
}
let types = ['String', 'Number', 'Boolean']
let utils = {}
types.forEach((type) => {
  // 第一次拆分
  utils['is' + type] = curring(checkType)(type) //先传入第一个参数
})
// 第二次拆分
console.log(utils.isString('str')) //传入第二个参数
console.log(utils.isString(123))

const currying  = (fn, args = []) => {
  const length = fn.length

  return (...param) => {
    const arr = [...args, ...param]
    if(args.length < length) {
      return currying(fn, arr)
    }
    return fn.apply(this, arr)
  }
}
