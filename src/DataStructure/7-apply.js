// 真题描述： 给定一个整数数组 arr 和一个目标值 target，
// 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
const arr = [2, 9, 10, 1, 3]
const target = 12
const twoSum = (arr, target) => {
  const map = {}
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (map[target - arr[i]] !== undefined) {
      return [map[target - arr[i]], i]
    } else {
      map[arr[i]] = i
    }
  }
}

const arrNew = twoSum(arr, target)
console.log(arrNew)
const arr1 = [1, 4, 5, 7, 9]
const arr2 = [2, 3, 6, 8, 9, 10]

// 有两个有序数组arr1 和 arr2，将两个有序数组合并为一个有序数组arr
// 双指针大法
function mergeSortArr(arr1, arr2) {
  let i = arr1.length - 1,
    j = arr2.length - 1,
    k = i + j + 1
  while (i >= 0 && j >= 0) {
    // arr1中的数比arr2中的数大
    if (arr1[i] >= arr2[j]) {
      arr1[k] = arr1[i]
      i--
      k--
      // arr2中的数比arr1中的数大
    } else {
      arr1[k] = arr2[j]
      k--
      j--
    }
  }
  // arr2有剩余，将arr2中的数据放入到arr1中
  // arr1有剩余则不需要处理
  while (j >= 0) {
    arr1[k] = arr2[j]
    j--
    k--
  }
}

mergeSortArr(arr1, arr2)

console.log(arr1)

// 双指针碰撞：左右指针从两边向中间相互靠近
// 什么时候使用双指针？ - “有序”和“数组”
