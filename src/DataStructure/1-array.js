// 创建数组
//  字面量
const arr1 = [1, 2, 3, 4]
const arr2 = []

// 构造函数
const arr3 = new Array() // 创建一个空数组
const arr4 = new Array(7) // 创建一个固定长度的数组
// 创建一个长度固定，元素固定的数组
const arr5 = new Array(7).fill(1)

// 数组的访问和遍历
arr[0] // 通过下标访问元素

const len = arr1.length
for (let i = 0; i < len; i++) {
  console.log(arr1[i])
}
// 还有forEach和map，reduce
// 在数学中，刑辱长方形阵列排列的负数或实数集合，被称为矩阵，因此二维数组的别名叫矩阵

// 初始化一个二维数组
// 注意初始化二维数组不要使用fill，fill填充的数组引用值，导致每个二维数组的引用值都一样，修改一个全部都被修改了
const arr6 = new Array(7)
const length = arr6.length

for (let i = 0; i < length; i++) {
  arr[i] = []
}

// 遍历二维数组，
const outerLength = arr6.length
for (let i = 0; i < outerLength; i++) {
  const innerLength = arr6[i].length
  for (let j; j < innerLength; j++) {
    console.log(arr6[i][j])
  }
}

const bubbleArr = [5,6,4,7,3,2,1]
// const bubbleArr = [1,2,3,4,6,5]
// [6,5,4]
// 冒泡排序 - 双层循环
const bubbleSort = arr => {
  for(let i = 0, len = arr.length; i < len; i++) {
    let lock = true
    console.log(i)
    for(let j = 0; j < len - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        lock = false
      }
    }
    if(lock) return arr
  }
  return arr
}

console.log(bubbleSort(bubbleArr))

// [4,3,2]
const selectionArr = [7,3,6,1,5,8]

// 选择排序
const selectionSort = arr => {
  const len = arr.length
  let minIndex = 0
  for(let i = 0; i < len - 1; i++) {
    minIndex = i
    for(let j = i; j < len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if(minIndex !== i){
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectionSort(selectionArr))

const insertArr = [7,5,6,4,3,2]
// 插入排序
// 有序数组的后一位跟前面的有序数组比较，插入相应的位置
const insertSort = arr => {
  const len = arr.length

  let temp

  for(let i = 1; i < len; i++) {
    temp = arr[i]
    let j = i
    while(j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[--j]
    }
    arr[j] = temp
  }
  return arr
}

console.log(insertSort(insertArr))
