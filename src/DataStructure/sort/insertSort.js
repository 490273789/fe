// 插入排序
// 有序数组的后一位跟前面的有序数组比较，插入相应的位置
const insertSort = (arr) => {
  const len = arr.length

  let temp

  for (let i = 1; i < len; i++) {
    temp = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[--j]
    }
    arr[j] = temp
  }
  return arr
}

console.log(insertSort(insertArr))
