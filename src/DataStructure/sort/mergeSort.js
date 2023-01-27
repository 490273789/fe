// 归并排序 - 分治
// 将数组拆分为length为1的数组，两两比较，是每个length大于1的数组都为有序数组，然后就是有序数组的比较

// 合并有序数组
function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift())
    else result.push(right.shift())
  }
  if (left.length) result = result.concat(left)
  if (right.length) result = result.concat(right)
  return result
}
function mergeSort(item = []) {
  // 递归的出口
  if (item.length < 2) return item

  const middle = Math.floor(item.length / 2)
  const left = item.slice(0, middle)
  const right = item.slice(middle)
  // 递归拆分成长度为1的数组
  return merge(mergeSort(left), mergeSort(right))
}
const mergeSortArr = [8, 3, 12, 1, 9, 4, 6, 5]
const newMergeSortArr = mergeSort(mergeSortArr)
console.log('newMergeSortArr:', newMergeSortArr)
