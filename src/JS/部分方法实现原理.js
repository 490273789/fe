// call函数源码
Function.prototype.call = function () {
  let [thisArg, ...args] = [...arguments]
  if (!thisArg) {
    thisArg = typeof window === 'undefined' ? global : window
  }
  thisArg.fnc = this
  let result = thisArg.fnc(...args)
  delete thisArg.fnc
  return result
}

// apply 函数源码
Function.prototype.apply = function (thisArg, rest) {
  let result
  if (!thisArg) {
    thisArg = typeof window === 'undefined' ? global : window
  }
  thisArg.fnc = this
  if (!rest) {
    result = thisArg.fnc()
  } else {
    result = this.fnc(...rest)
  }
  delete thisArg.fnc
  return result
}

// bind 函数源码
Function.prototype.bind = function () {}

//构造函数基本原理

/* new 实现原理
  1、创建一个空对象，构造函数中的this指向这个空对象
  2、这个对象被执行[[原型链接]]
  3、执行构造韩式方法，属性和函数添加到this引用的对象中
  4、如果构造函数没有返回其他对象，那么返回this，即创建的这个空对象，否则返回构造函数中返回的对象。
**/
function _new() {
  let target = {} //内部创建一个对象
  let [constructor, ...args] = [...arguments] //第一个参数是构造函数
  target.__proto__ = constructor.prototype
  let result = constructor.apply(target, args) //执行构造函数
  // 判断函数返回的类型
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result
  }
  // 如果返回的不是对象或者函数则返回创建的新对象
  return target
}

function newFn(target, ...args) {

  if(Object.prototype.toString.call(target) !== "[object Function]") return;
  const defaultResult = Object.create({}, target.prototype)

  const result = target.apply(defaultResult, args)

  if(result && (typeof result === 'object' || typeof result === 'function')) {
    return result
  }
  return defaultResult
  
}



// Object.create()实现原理
