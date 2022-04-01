let i = 0

// 使用setTimeout实现setInterval
function mySetInterval(fn,time) {
  function interval() {
    setTimeout(interval,time)
    fn();
  }
  setTimeout(interval,time)
}

mySetInterval(()=> {
  console.log(i++)
},1000)

// 使用setInterval实现setTimeout从
let p = 0
function mySetTimeout(fn, time) {
  const timer = setInterval(()=>{
    clearInterval(timer)
    fn()
  },time)
}

mySetTimeout(()=> {
  console.log(p++)
},1000)