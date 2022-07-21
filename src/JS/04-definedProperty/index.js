// Property Descriptor 属性描述符 - 用于描述一个属性的相关信息
// Object.getOwnPropertyDescriptor - 获取对象某个属性的描述符
let obj1 = {}
obj1.b = '2'
const description = Object.getOwnPropertyDescriptor(obj1, 'b')
console.log('description:',description)
// value： 属性的值
// configurable: 其他信息能否被修改
// enumerable：该属性是否能够呗枚举
// writable： 该属性是否可以被重新赋值
Object.defineProperty(obj1, 'c', {})
Object.defineProperty(obj1, 'd', {
  enumerable: true,
  configurable: true,
  get() {
    return this.a
  },
  set(value) {
    this.a = value
  },
})

// Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>
// 回去对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj1))

// 以下为不同方法添加对象属性的默认行为
// a: {value: "1", writable: true, enumerable: true, configurable: true}
// b: {value: "2", writable: true, enumerable: true, configurable: true}
// c: {value: undefined, writable: false, enumerable: false, configurable: false}
// d: {enumerable: false, configurable: false, get: ƒ, set: ƒ}
console.log('obj1', obj1)
obj1.c = '4' // 不生效

// 默认configurable为false，所以在此设置configurable、enumerable、value、writable中的任意属性都会报错
// Uncaught TypeError: Cannot redefine property: c
// Object.defineProperty(obj1, 'c', {
//   value: '3',
// })
const a = console.log(Object.keys(obj1)) //["a", "b"]

const obj2 = {
  create() {},
}

// const和Object.defineProperty()的关系
