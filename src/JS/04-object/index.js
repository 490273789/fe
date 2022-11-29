// 面向对象：就是现实的抽象
// 创建对象
const obj1 = new Object()
obj1.name = 'wsz'

// 字面量
const obj2 = {
  name: 'wsc',
}

console.log(obj1, obj2)

// 创建对象方案 - 工厂模式
// 缺点：获取不到对象的真是类型（Person）
function createPerson(name, age, height) {
  const p = {}

  p.name = name
  p.age = age
  p.height = height

  p.eating = function() {
    console.log(this.name + '在吃')
  }

  return p
}


const p1 = createPerson('w', 29, 1.75)
const p2 = createPerson('s', 30, 1.85)

console.log(p1, p2)

// 对象创建方式 - 构造函数
// 通过new关键字去调用一个函数，那么这个函数就是构造函数
function Car(name, color) {
  this.name = name
  this.color = color

  this.run = function() {
    console.log('car runing')
  }

}

// new的执行过程
// 在内存中隐式的创建一个新对象
// 将对象的__proto__指向构造函数的prototype
// 将this指向当前的新对象
// 执行函数代码
// 如果构造函数没有返回非空的对象，则返回这个新对象

// 原型
// JS中每个对象都有一个特殊的内置属性[[prototype]](__proto__，浏览器提供的属性，不是标准), 这个属性指向另一个对象
// es5之后提供的方法Object.getPrototypeOf()

// 作用
// 当我们从对象中获取属性时，他会触发[[get]]操作
//[[get]]会在当前对象中查找对相应的属性，如果找到了会直接使用
//如果没找到，那么会沿着它的原型链去查找[[prototype]]

// 函数同时有隐式原型（__proto__）和显示原型（prototype）
// 对象只有隐式原型

// 对象上常用的方法
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
Object.create(null)

// hasOwnProperty(), 判断当前属性是否存在对象中，不包含原型链

// in操作符，判断当前属性是否存在对象中，包括原型链中

// for in 循环遍历对象中的属性，包括原型链中的

//instanceof，判断构造函数的prototype，是否出现在某个实例的原型链上
// 实例 instanceof 构造函数

// isPrototypeOf(), 判断构造函数的prototype，是否出现在某个实例的原型链上
// 原型链.isPrototypeOf(实例)
