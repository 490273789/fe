let obj1 = {}
obj1.b = '2'
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

// CONST和Object.defineProperty()的关系
