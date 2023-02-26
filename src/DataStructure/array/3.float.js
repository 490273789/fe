const floatArr = [1,[2,3,[5,6,[7]]],[4]]
const float = (arr) => {
  let result = []
  let index = 0,
    len = arr.length
  while(index < len) {
    if(Array.isArray(arr[index]))result = result.concat(float(arr[index++]))
    else result.push(arr[index++])
  }
  return result
}

console.log(float(floatArr))
