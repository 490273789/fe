// 导出方法1
// export let a = 1
// export let b = 3
setInterval(() => {
    a++
})
// 导出方法2
export {
    a as c, // as是起别名
    b,
    c as default
}
// 导出方法3
export default c