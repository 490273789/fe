// /roo+t/ // + 表示前面的字符串至少出现一次（1此，多次）
// /roo*t/ // * 表示前面的字符串可以不出现或出现多次（0次，1次，多次）
// /roo?t/ // ? 表示前面的字符串最多出现一次（0次，1次）
// 语法： /正则表达式/修饰符（可选）22222
// 修饰符
// i ignore - 不区分大小写
// g global - 全局匹配
// m multi line - 多行匹配 使边界字符 ^ 和 $ 匹配每一行的开头和结尾，记住是多行，而不是整个字符串的开头和结尾
// s 特殊字符圆点 . 中包含换行符 \n，默认情况下的圆点 . 是 匹配除换行符 \n 之外的任何字符，加上 s 修饰符之后, . 中包含换行符 \n。


// 常用方法
// 字符串上的方法
// match() 检索字符串中正则表达式的匹配，返回一个数组存放返回结果，没有则返回null
const pattern1 = /[0-9]+/
const str = 'ab123mn456'
const res = str.match(pattern1)
console.log(res)
// replace() 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
let str1 = 'number4321'
// /[0-9]+/g /\d+/g
let txt = str1.replace(/\d+/g, 'str')
console.log(txt)

// search() 检索字符串中与正则表达式匹配的子字符串，并返回子串的其实位置
let str2 = 'number4321'
let n = str1.search(/[1-9]+/)
console.log(n)

// 正则对象（RegExp ）上的方法
// test() 用于检测一个模块是否匹配某个模式，返回布尔类型的值
const str3 = 'test1234'
const reg3 = /[a-z]+/
const res3 = reg3.test(str3)
console.log(res3)

// exec() 检索字符串中正则表达式的匹配，返回一个数组存放返回结果，没有则返回null
const str4 = 'test1234'
const reg4 = /[a-z]+/
const res4 = reg4.exec(str4)
console.log(res4)


// 匹配邮箱正则表达式
const emailReg = /\b[\w.%+-]+@[\w.+]+\.[a-zA-Z]{2,6}\b/