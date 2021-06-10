const fs = require('fs')

const after = (times, fn) => () => --times === 0 && fn()

let school = {}
// 并发问题解决方案
// 1、计数器
// 2、after函数
let newAfter = after(2, () => {
  console.log(school)
})

fs.readFile('name.txt', 'utf-8', (err, data) => {
  school['name'] = data
  newAfter()
})
fs.readFile('age.txt', 'utf-8', (err, data) => {
  school['age'] = data
  newAfter()
})
