// 发布订阅
// on emit off once listenEvent
// const EventEmitter = require('events')
const EventEmitter = require('./3.1-event-source-code')

const event = new EventEmitter()
event.on('newListener', (type) => {
  console.log(type)
})
// event.on('newListener', (type) => {
//   console.log(type)
// })
event.on('say', () => {
  console.log('boy cool')
})

const say = () => {
  console.log('say happy')
}

event.on('say', say)
event.off('say', say)

const sayOnce = () => {
  console.log('sayonce')
}
event.once('say', sayOnce)
event.off('say', sayOnce)

event.emit('say')
event.emit('say')
