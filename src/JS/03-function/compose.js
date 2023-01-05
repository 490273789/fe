// 组合函数：在js中是一种对函数使用的技巧
function sum1(m) {
  return m * 2
}

function sum2(n) {
  return n ** 2
}

// const result1 = sum2(sum1(10))
// console.log(result1)

// 组合函数
function composeFn(...fns) {
  if (fns.some(fn => typeof fn !== 'function'))
    throw new TypeError('Expected arguments are functions')
  return fns.reduceRight((a, b) => (...args) => a(b(...args)))
}

const testCompose = composeFn(sum1, sum2)
console.log(testCompose(4))

//异步
// function asyncComposeFn(...fns) {
//   if(fns.some(fn => typeof fn === 'function'))  throw new TypeError()
//   return x => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x))
// }

