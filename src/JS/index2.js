let a = new Boolean(false) //[Boolean: false]
let b = Boolean(0)
console.log({})
console.log(a)
console.log(b)
if(a) {
  console.log('a')
}

if(b) {
  console.log('b')
}

if({}) {
  console.log('c')
}
console.log({})
console.log({} == true)
if({} == true) {
  console.log('d')
}

const str = '  er  t y  '
function trim(params) {
  // return params.replace(/(^\s+)|(\s+$)/g, '')
  return params.replace(/(\s+)/g, '')
}

console.log(trim(str))

function toLine(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase() //注意正则表达式中的括号
}
let str8 = 'sdDateCase'
console.log(toLine(str8))

function toHump(str) {
  return str.replace(/-(\w)/g, (str1, str2, str3, str4) => {
    //(\w) 没有括号就只有一个表达式，函数也就只有一个参数，多一个子表达式函数就多一个参数
    // -e e 2 qw-er-rt
    console.log(str1, str2, str3, str4)
    return str2.toUpperCase()
  })
}
let hump = toHump('qw-er-rt')
console.log(hump)