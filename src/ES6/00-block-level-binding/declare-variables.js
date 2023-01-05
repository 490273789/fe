// 使用var声明变量的问题
// 1、允许重复的声明变量
var a = 1
var a = 2
console.log (a)
// 2、变量提升：数据访问杂乱、闭包等问题
if(Math.random() < 0.5) {
  var b= 'b'
  console.log(b)
} else {
  console.log(b)
}
console.log(b)

var btnWrap = document.getElementById('btn-wrap')
for(var i = 0; i < 10; i++) {
  var btn = document.createElement('button')
  btn.innerHTML = '按钮' + i
  btnWrap.appendChild(btn)
  btn.onclick = function() {
    console.log(i)
  }
}
// 3、全局变量挂载到全局对象，全局对象成员污染
var c = 'c'
console.log(window)

// 块级作用域： 代码执行遇到花括号，会创建一个块级作用域，花括号执行结束，销毁块级作用域

// let
// 1、声明变量，不允许当前作用域范围内重复声明，可识别块级作用域

// 2、声明的变量提升后会放入到暂时性死区，变量只有声明后才能使使用

// 3、声明的变量不会挂载到全局对象

// const
// 1、声明变量，不允许当前作用域范围内重复声明，可识别块级作用域

// 2、声明的变量提升后会放入到暂时性死区，变量只有声明后才能使使用

// 3、声明的变量不会挂载到全局对象

// 4、声明变量，必须在声明时赋值，而且不可以重新赋值
