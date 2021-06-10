// react事务实现基础原理  开的时候做某件事情，结束的时候在做某件事情
const perform = (anyMethod, wrappers) => {
  wrappers.forEach((wrapper) => {
    wrapper.initialize()
  })
  anyMethod()
  wrappers.forEach((wrapper) => {
    wrapper.close()
  })
}
// 函数的参数为 函数 和 数组  --  高阶函数
perform(() => {
  console.log('说话')
}, [
  {
    initialize() {
      console.log('您好1')
    },
    close() {
      console.log('再见1')
    },
  },
  {
    initialize() {
      console.log('您好2')
    },
    close() {
      console.log('再见3')
    },
  },
])
