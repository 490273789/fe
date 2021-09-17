/**
 * @description: 防抖函数
 * @param {*}
 * @return {*}
 */
export function debounce(fn, time, options = { immediate = false}) {
  let timer = null

  const { immediate } = options

  return function (...args) {
    if(timer) clearTimeout(timer)

    const _this = this

    if(immediate) {
      let isInvoke = false;
      if(!timer) {
        fn.apply(_this, args)
        isInvoke = true
      }
      timer = setTimeout(() => {
        // 执行完后初始化timer
        timer = null
        // 连续的第二次执行后会触发，防止用户只点击一次却执行了两次
        if(!isInvoke) {
          fn.apply(_this, args)
        }
        
      })
    } else {
      timer = setTimeout(() => {
        fn.apply(_this, args)
      },time) 
    }
  }
}

/**
 * @description: 节流函数
 * @param {*} fn
 * @param {*} time
 * @param {*} options
 * @return {*}
 */
export function throttle(fn, time, options = { trailing = false}) {
  let lastTime = 0

  let timer = 0
  const { trailing } = options

  return function (...args) {

    const _this = this
    const newTime = new Date().getTime()

    if(newTime - lastTime > time) {
      if(timer) {
        clearTimeout(timer)
        timer = null
      }
      fn.apply(_this, args)
    } else if( timer === null && trailing) {
      timer = setTimeout(()=> {
        // 为了保证每一次的最后一次都能都执行
        timer = null
        fn.apply(_this, args)
      }, time)
    }
  }
}