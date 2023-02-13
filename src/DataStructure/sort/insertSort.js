// 插入排序
// 有序数组的后一位跟前面的有序数组比较，插入相应的位置
const insertSort = (arr) => {
  const result = [...arr]
  const length = result.length
  if (length < 2) return result
  let temp
  for (let i = 1; i < length; i++) {
    temp = result[i]
    let j = i
    while (j > 0 && result[j - 1] > temp) {
      // 将符合条件的向后移一位
      result[j] = result[--j]
    }
    // 将temp放到正确的位置
    result[j] = temp
  }
  return result
}

const insertArr = [9, 3, 4, 7]

console.log(insertSort(insertArr))

// 有序数组 [1,3,4,5,2] temp = 2 j = 4
// 循环1 [1,3,4,5,5] j = 3
// 循环2 [1,3,4,4,5] j = 2
// 循环3 [1,3,3,4,5] j = 1
// 循环4 [1,2,3,4,5] j = 0
// 2和有序数组排序

const insertSort1 = (arr) => {
  const length = arr.length
  if (length < 2) return arr
  const result = [...arr]
  let temp, j
  for (let i = 1; i < length; i++) {
    temp = result[i]
    j = i
    while (j > 0 && result[j - 1] > temp) {
      result[j] = result[--j]
    }
    result[j] = temp
  }
  return result
}

console.log('insertSort1:', insertSort1(insertArr))
