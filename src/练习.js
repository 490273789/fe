// 深拷贝
function deepClone(value, hash=new WeakMap()) {
  if(value === null) return
  if(typeof value !== 'object') return
  if(value instanceof RegExp) return new RegExp(value)
  if(value instanceof Date) return new Date(value)
  let instance = new value.constructor() // 当前值可能是数组或者对象
  if(hash.has(value)) {
    return hash.get(value)
  }
  hash.set(value)
  for(key in value) {
    if(value.hasOwnProperty(key)) {
      instance[key] = deepClone(value[key])
    }
  }
}
// 冒泡

// call

// apply

// bind

