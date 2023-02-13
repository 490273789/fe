// 冒泡排序 - 双层循环

const bubbleSort = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    let lock = true
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        lock = false
      }
    }
    if (lock) return arr
  }
  return arr
}
const arr = [5, 6, 4, 7, 3, 2, 1]
console.log(bubbleSort(arr))

const bubbleSort1 = (arr) => {
  let res = [...arr]
  for (let i = 0, len = res.length; i < len; i++) {
    let lock = true
    for (let j = 0; j < len - 1 - i; j++) {
      if (res[j] > res[j + 1]) {
        let a = res[j]
        res[j] = res[j + 1]
        res[j + 1] = a
        lock = false
      }
    }
    if (lock) return res
  }
  return res
}
console.log('bubbleSort1：', bubbleSort1(arr))
