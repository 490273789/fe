
const mergeSortArr1 = (arr1, arr2) =>{
  let temp1 = [...arr1]
  let temp2 = [...arr2]
  let result = []
  while(temp1.length && temp2.length) {
    if(temp1[0] < temp2[0]) result.push(temp1.shift())
    else result.push(temp2.shift())
  }
  if(temp1.length) result = result.concat(temp1)
  if(temp2.length) result = result.concat(temp2)
  return result
}
const sortArr1 = [1,2,4,7]
const sortArr2 = [3,5,6,8]
console.log('mergeSortArr1:',mergeSortArr1(sortArr1,sortArr2))
