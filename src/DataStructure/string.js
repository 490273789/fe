// 字符产反转
const str = 'hello world'
console.log(str.split('').reverse().join(''))

// 判断字符串回文
const str1 = 'yesdey'

// 方法一使用字符串反转
function isPalindrome1(str) {
  const reverseStr = str.split('').reverse().join('')

  return str === reverseStr

}

console.log(isPalindrome1(str1))

// 方法二使用会问字符串的对称性，比较前n个和后n个是否相等
function isPalindrome2 (str) {
  const len = str.length

  for(let i= 0; i < len/2; i++ ) {
    if(str[i] !== str[len - 1 - i] ){
      return false
    }
  }
  return true
}

console.log(isPalindrome2(str1))

// 真题
// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
function validPalindrome(str){
  let len = str.length

  let i = 0,j = len - 1

  while(i < j && str[i] === str[j]) {
    i++;
    j--
  }

  if(isPalindrome(i+1, j)) {
    return true
  }

  if(isPalindrome(i, j-1)) {
    return true
  }

  function isPalindrome (start, end) {
    while(start < end) {
      if(str[start] !== str[end]) {
        return false
      }
      start++;
      end--;
    }
    return true
  }
  return false
}

const str3 = 'qwberrewq'

console.log(validPalindrome(str3))
