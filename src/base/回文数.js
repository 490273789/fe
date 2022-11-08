// 解法一：
// 将整数转为字符串，然后分割问数组，只要循环一半的长度进行判断即可

const isPalindrome1 = (x) => {
  const reverseStr = String(x).split('').reverse().join('')
  return String(x) === reverseStr
}

console.log('6:', isPalindrome1(6))
console.log('121:', isPalindrome1(121))
console.log('12:', isPalindrome1(12))
console.log('-121:', isPalindrome1(-121))

const isPalindrome2 = (x) => {
  if (x < 0) return false
  let cur = 0
  let num = x
  while (num !== 0) {
    cur = cur * 10 + (num % 10)
    num /= 10
  }
  return cur === x
}

console.log('6:', isPalindrome2(6))
console.log('121:', isPalindrome2(121))
console.log('12:', isPalindrome2(12))
console.log('-121:', isPalindrome2(-121))
