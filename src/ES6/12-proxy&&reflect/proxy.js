// 基本使用
const obj1 = {
  name: 'wangshaonan'
}
const proxy1 = new Proxy(obj1, {
  get(target, propKey, receiver) {
    // 目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象）
    console.log(target, propKey, receiver)
    return 'wsn'
  }
})

console.log('proxy1: ',obj1.name)
console.log('proxy1: ',proxy1.name)

const proxy2 = new Proxy({}, {
  get() {
    return 'proxy'
  }
})

const obj2 = Object.create(proxy2)

console.log('proxy2: ',obj2.name)
