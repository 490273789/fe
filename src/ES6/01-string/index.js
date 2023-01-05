const text = '𠮷' //占用了两个码元（32位），

console.log('字符串长度：', text.length) // length读取的是码元的长度（部分生僻字会占用两个码元）
console.log('使用正则测试：', /^.$/u.test(text))
console.log('得到第一个码元：', text.charCodeAt(0))
console.log('得到第二个码元：', text.charCodeAt(1))

//𠮷：\ud842\udfb7
console.log('得到第一个码点：', text.codePointAt(0))
console.log('得到第二个码点：', text.codePointAt(1))

/**
 * 判断字符串char，是32位，还是16位
 * @param {*} char
 */
function is32bit(char, i) {
  //如果码点大于了16位二进制的最大值，则其是32位的
  return char.codePointAt(i) > 0xffff
}

/**
 * 得到一个字符串码点的真实长度
 * @param {*} str
 */
function getLengthOfCodePoint(str) {
  var len = 0
  for (let i = 0; i < str.length; i++) {
    //i在索引码元
    if (is32bit(str, i)) {
      //当前字符串，在i这个位置，占用了两个码元
      i++
    }
    len++
  }
  return len
}

console.log('𠮷是否是32位的：', is32bit('𠮷', 0))
console.log('ab𠮷ab的码点长度：', getLengthOfCodePoint('ab𠮷ab'))

const str = '学习字符串'
// 字符串实例上的方法
// includes：判断字符串中是否包含指定的子字符串
// 第二个参数：从什么位置开始查找
console.log('是否包含“字”：', str.includes('字'))

// startsWith：判断字符串中是否以指定的字符串开始
// 第二个参数：从字符串的第n位，以指定的字符串开始
console.log('是否以“学”开头：', str.startsWith('学'))

// endsWith：判断字符串中是否以指定的字符串结束
// 第二个参数：字符串的第n位，是指定的字符串
console.log('是否以“串”结尾：', str.endsWith('字', 2))

// repeat：建字符串重复指定的次数，返回一个新的字符串
console.log('重复四次：', str.repeat(4))

// 正则表达式y g u
// y 匹配时，完全按照正则对象中的lastIndex位置开始匹配，并且匹配的位置必须在lastIndex位置。
// u 匹配的是码点
// g 匹配的是码元
// lastIndex 的值默认是0，可以更改
const str1 = 'Hello Word!!!'
const reg1 = /W\w+/
const reg2 = /W\w+/y
const reg3 = /W\w+/y
reg3.lastIndex = 6
console.log(reg1.test(str1)) // true
console.log(reg2.test(str1)) // false
console.log(reg3.test(str1)) // true
