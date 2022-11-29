// 原型式继承
// 方案1
const obj1 = { name: 'boj1' }

function createObject1(o) {
  function Fn() {
  }

  Fn.prototype = o
  return new Fn()
}

const result1 = createObject1(obj1)
console.log(result1)
console.log(result1.__proto__)

// 方案2
const obj2 = { name: 'obj2' }

function createObject2(o) {
  const newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

const result2 = createObject2(obj2)
console.log(result2)
console.log(result2.__proto__)

// 方案3
const obj3 = { name: 'obj3' }
const result3 = Object.create(obj3)
console.log(result3)
console.log(result3.__proto__)


// 寄生式继承
const obj4 = { name: 'obj4' }

function createStudent(no) {
  const newObj = Object.create(obj4)
  newObj.no = no
  newObj.studying = function() {
    console.log('学习中...')
  }
  return newObj
}

const result4 = createStudent('1')
console.log(result4)
console.log(result4.__proto__)


// 寄生组合式继承
