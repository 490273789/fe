/**
 * @msg: 可以生成新的函数，等待函数执行次数达到我的预期时执行回调函数
 * @param {times:Number}
 * @param {fn:Function}
 * @return {Function}
 */
const after = (times, fn) => {
  return () => {
    if (--times == 0) {
      fn()
    }
  }
}

let newAfter = after(3, () => {
  console.log('执行完第三次')
})

newAfter()
newAfter()
newAfter()
