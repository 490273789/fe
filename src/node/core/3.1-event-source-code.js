// 实现event 的on emit off once newListener

const { Module } = require('webpack')

function EventEmitter() {
  this._events = Object.create(null)
}

EventEmitter.prototype.on = function (eventName, callback) {
  if (eventName !== 'newListener') this.emit('newListener', eventName)
  if (this._events[eventName]) this._events[eventName].push(callback)
  else this._events[eventName] = [callback]
}

EventEmitter.prototype.emit = function (eventName, ...args) {
  if (this._events[eventName]) {
    this._events[eventName].forEach((fn) => fn(...args))
  }
}

EventEmitter.prototype.once = function (eventName, callback) {
  const fn = () => {
    callback()
    this.off(eventName, fn)
  }
  fn.l = callback
  this.on(eventName, fn)
}
// fn[fn1, fn2, fn3]
// callback = fn3
EventEmitter.prototype.off = function (eventName, callback) {
  this._events[eventName] = this._events[eventName].filter((fn) => {
    // 如果fn 不等于 callback 那么继续判断，因为once中更改了callback，不过在l属性上对callback进行了缓存，只有两个都不相同的新情况下才保留
    // 如果fn 和 callback相同了，则直接去掉
    // fn或者fn.l只要有一个相同的就返回false
    return fn !== callback && fn.l !== callback
    // return !(fn === callback || fn.l === callback)
  })
}

module.exports = EventEmitter
