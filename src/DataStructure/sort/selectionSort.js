// 选择排序

const selectionSort = (arr) => {
  const len = arr.length
  let minIndex = 0
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
const selectionArr = [7, 3, 6, 1, 5, 8]
console.log(selectionSort(selectionArr))

const insertArr = [7, 5, 6, 4, 3, 2]
