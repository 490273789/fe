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

  if(typeof target !== 'function') return;
  const defaultResult = Object.create({}, target.prototype)

  const result = target.apply(defaultResult, args)

  if(result && (typeof result === 'object' || typeof result === 'function')) {
    return result
  }
  return defaultResult
  
}



// Object.create()实现原理

function _create(proto, prototypeObj) {
  if(prototypeObj === null) {
     throw 'TypeError'
  } else {
    function Fn(){}
    Fn.prototype = proto
    const obj = new Fn()
    if(proto === null) {
      obj.__proto__ = null
    }
    return obj
  }
}

// instanceof 实现原理
// MDN上对instanceof方法的定义 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

function _instanceof(left, right) {
  if(typeof left !== 'object' && typeof left !== 'function') return false
  const right = right.prototype

  while(true) {
    if(left === null) return false
    if(left === right) return true
    left = left.__proto__
  }
}
