const path = require('path')
// const util = require('util')
const ncp = require('ncp')

// promisify的实现原理：将方法包裹在promise中，在方法的回调函数中调用resolve和reject
const promisify =
  (fn) =>
  (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, function (err) {
        if (err) reject(err)
        resolve()
      })
    })
  }

// const asyncNcp = util.promisify(ncp)
const asyncNcp = promisify(ncp)

;(async () => {
  await asyncNcp(path.resolve(__dirname, 'readmine.md'), path.resolve(__dirname, 'note.md'))
  console.log('copy success')
})()

// ncp(path.resolve(__dirname, 'readmine.md'), path.resolve(__dirname, 'note.md'), (err) => {
//   if (err) {
//     return
//   }
//   console.log('copy success!')
// })
