// const promise = new Promise((resolve)=>{
//   resolve('Promise')
// })

// console.log(promise)

// function test() {
//   return Promise.resolve('Promise.resolve')
// }

// const res = test().then((res) => {
//   console.log(res)
// })

// console.log(res)
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || 1))
}

const arr = []
const stack = []

// type Middleware<T> = (context: T, next: Koa.Next) => any;
stack.push(async (context, next) => {
  arr.push(1)
  await wait(1)
  await next()
  await wait(1)
  arr.push(6)
})

stack.push(async (context, next) => {
  arr.push(2)
  await wait(1)
  await next()
  await wait(1)
  arr.push(5)
})

stack.push(async (context, next) => {
  arr.push(3)
  await wait(1)
  await next()
  await wait(1)
  arr.push(4)
})

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */
function compose(middleware) {
  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      // 出口
      if (!fn) return Promise.resolve()
      try {
        // 递归
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}

async function start() {
  await compose(stack)({})
  console.log(arr, stack)
}

start()

// dispatch(0) index = -1,  i = 0
// 栈：[dispatch(0)]

// fn0({}, dispatch.bind(null, 0 + 1))
// 栈：[dispatch(0), fn0]

// dispatch(1) index = 0,  i = 1
// 栈：[dispatch(0), fn0, dispatch(1)]

// fn1({}, dispatch.bind(null, 1 + 1))
// 栈：[dispatch(0), fn0, dispatch(1), fn1]

// dispatch(2) index = 1,  i = 2
// 栈：[dispatch(0), fn0,dispatch(1), fn1, dispatch(2)]

// fn2({}, dispatch.bind(null, 2 + 1))
// 栈：[dispatch(0), fn0,dispatch(1), fn1, dispatch(2), fn2]

// dispatch(3) index = 2,  i = 3
// 栈：[dispatch(0), fn0,dispatch(1), fn1, dispatch(2)]

// dispatch(2)
// 栈：[dispatch(0), fn0,dispatch(1), fn1]

// fn1
// 栈：[dispatch(0), fn0,dispatch(1)]

// dispatch(1)
// 栈：[dispatch(0), fn0]

// fn0
// 栈：[dispatch(0)]

// dispatch(0)
// 栈：[]
