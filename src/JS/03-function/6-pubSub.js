const fs = require('fs')

// 例子1
let school = {}
const event = {
  arr: [],
  // 订阅
  on(fn) {
    this.arr.push(fn)
  },
  // 发布
  emit() {
    this.arr.forEach((fn) => fn())
  },
}

// 订阅
event.on(() => {
  console.log('ok')
})

event.on(() => {
  if (Object.keys(school).length === 2) {
    console.log(school)
  }
})

// 发布
fs.readFile('name.txt', 'utf-8', (err, data) => {
  school['name'] = data
  event.emit()
})

fs.readFile('age.txt', 'utf-8', (err, data) => {
  school['age'] = data
  event.emit()
})

// 例子2
// vue 中央事件总线原理
class Bus {
  constructor() {
    this.callback = {}
  }
  // 订阅
  $on(name, fn) {
    this.callback[name] = this.callback[name] || []
    this.callback[name].push(fn)
  }
  // 发布
  $emit(name, args) {
    if (this.callback[name]) {
      this.callback[name].forEach((cb) => cb(args))
    }
  }
}

let e = new Bus()
// 订阅
e.$on('add', (arg) => {
  console.log(arg + '-1')
})
e.$on('add', (arg) => {
  console.log(arg + '-2')
})

e.$emit('add', '666')
