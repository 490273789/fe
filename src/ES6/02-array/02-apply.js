// reduce的应用
// 数组扁平化 收敛
console.log([1, [2, [3, [4, [5]]]]].flat(100))

// 数组扁平化的实现原理

// 反柯里化

// reduce 原理


// 函数的组合compose redux
const compose = (...args) => (...values) => {
  let fn = args.pop()
  return args.reduceRight((prev, current) => current(prev), fn(...values))
}

// 优化 redux 实现

export default function compose(...funcs) {
    if(funcs.length === 0) {
        return arg => arg
    }
    if(funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b)=> (...args) => a(b(...args))) 
}

const compose2 = (...args) =>
  args.reduce((prev, current) => (...values) => prev(current(...values)))

const sum = (a, b) => a + b

const len = (str) => str.length

const addCurrency = (val) => '￥' + val

const r = compose2(addCurrency, len, sum)('asdf', 'qwert')

console.log(r)
