// vue重写数组的方法

const update = () => {
  console.log('更新视图')
}

const proto = Object.create(Array.prototype) // 保证除了重写的方法外，访问数组的其他方法不受影响
;['push', 'unshift', 'shift'].forEach((method) => {
  proto[method] = function (...args) {
    update()
    Array.prototype[method].call(this, ...args)
  }
})
function observer(obj) {
  if (Array.isArray(obj)) {
    obj.__proto__ = proto
  }
}

let arr = []
observer(arr)

arr.push(1)
