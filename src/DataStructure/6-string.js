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



// 真题描述： 设计一个支持以下两种操作的数据结构：
// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
// . 可以表示任何一个字母。

const WordDictionary = function () {
  this.words = {}
}

WordDictionary.prototype.addWord = function (word) {
  if(this.words[word.length]) {
    this.words[word.length].push(word)
  } else {
    this.words[word.length] = [word]
  }
}

WordDictionary.prototype.searchWord = function (word) {
  if(!this.words[word.length]) {
    return false
  }

  const len = word.length

  if(!word.includes('.')) {
    return this.words[len].includes(word)
  }

  const reg = new RegExp(word)
  return this.words[len].some(item => {
    return reg.test(item)
  })
}

const wordDictionary1 = new WordDictionary()

wordDictionary1.addWord('asd')
wordDictionary1.addWord('qwe')
wordDictionary1.addWord('zxc')

console.log(wordDictionary1.searchWord('asd'))
console.log(wordDictionary1.searchWord('ert'))
console.log(wordDictionary1.searchWord('z..'))
console.log(wordDictionary1.searchWord('qw.'))
console.log(wordDictionary1.searchWord('qw..'))


// 真题描述：请你来实现一个 atoi 函数，使其能将字符串转换成整数。
// 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31) 。

function stringToNumber (str) {

  const regRex = /\s*([-\+]?[0-9]*).*/

  // 使用match
  const result = str.match(regRex)

  if(!result) {
    return 0
  }

  const maxNumber = 2 ** 31 -1

  const minNumber = -maxNumber -1

  const number = +result[1]

  if(isNaN(number)) {
    return 0
  }

  if(number > maxNumber) {
    return maxNumber
  }

  if(number < minNumber) {
    return minNumber
  }

  return number
 }

console.log(stringToNumber('+123qwe'))
console.log(stringToNumber('-0123wq'))
console.log(stringToNumber('qwe123'))
console.log(stringToNumber('0'))
console.log(stringToNumber('1234'))
console.log(stringToNumber('+'))
console.log(stringToNumber('+qwe'))
console.log(stringToNumber('3147483647'))
