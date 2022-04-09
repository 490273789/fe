let a = 'w'
let b = 's'
let c = 'n'

function tagF(strings, ...args) {
  console.log(strings)
  console.log(...args)
  return 'good'
}

let res1 = `${a} && ${b} && ${c}`
let res2 = tagF`${a} && ${b} && ${c}`

console.log(res1)
console.log(res2)