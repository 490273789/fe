let a = 'w'
let b = 's'
let c = 'n'

// 第一个参数为 [ '', ' && ', ' && ', '' ]
//第二个参数为&{} 中的值
function tagF(strings, ...args) {
  console.log(strings)
  console.log(...args)
  return 'good'
}

let res1 = `${a} && ${b} && ${c}`
let res2 = tagF`${a} && ${b} && ${c}`

console.log('res1:',res1)
console.log('res2:',res2)
