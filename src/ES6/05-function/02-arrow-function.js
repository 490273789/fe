// 三、箭头函数
// 1.对于小括号(),函数的参数有且只能有一个，才可以不写小括号()
// 2.对于大括号{},函数体仅有一条语句的时候可以不写，不写大括号默认返回name
let getName = (name) => name

// 3.上一个函数的等价写法
let getName1 = function (name) {
  return name
}

// 4.两个参数
let show = (name, age) => console.log(name, age)

//5.空函数
let fn = () => {}
function fn() {} //等价上面的函数

//6.在箭头函数中，返回对象的简写，将对象使用括号括起来
let returnObj = (name) => ({ name: name }) //简写-->let returnObj = name => ({name})

// 7.箭头函数的嵌套
function sum2(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}
var sum3 = sum2(1)
var sum4 = sum3(2)
console.log(sum4(3)) //6
// 等价上面函数的写法
let sum5 = (x) => (y) => (z) => x + y + z
console.log(sum5(1)(2)(3)) //6

//8.立即执行箭头函数
let fn = ((name) => name)('wsn') //默认返回name
let name = (function (name) {
  return name
})('wsn') //等价上面的函数
// this绑定分为4种：
// 1.默认绑定(控制性的函数，函数单纯执行，this指向window,dom事件函数，this指向事件源)
// 2.隐式绑定（谁调用this指向谁）
// 3.显示绑定（通过apply call bind）
// 4.new绑定
//权重：4>3>2>1

var name = 'window'
var obj = {
  name: 'obj',
  print: function () {
    console.log(this.name)
  },
}
obj.print() //obj
var newPrint = obj.print.bind(window) //window
var newnewPrint = newPrint.bind(obj) //bind执行window

newPrint()
newPrint()

var obj1 = {
  name: 'obj1',
  print: () => console.log(this.name),
}
obj1.print() //window

var newPrint = obj1.print.bind(obj1)
newPrint() //window

// 1、箭头函数中 没有this 没有arguments 没有 new.target 没有super 没有prototype
// 2、不能被new操作符执行
// 3、箭头函数不能被作为构造函数，更多功能用于计算，数据流向，方便javascript引擎优化代码
// 4、箭头函数具有绑定this的能力，绑定后就不会改变，this不会像es5中的this根据函数不同的调用方式而改变。
// 5、箭头函数内部的arguments this由定义时非箭头函数的父级的arguments this的值决定
// 6、箭头函数定义以后必须要有存储的位置

// a、使用变量存储
let sum6 = (a, b) => {
  let c = a + b
}
sum6()
// b、使用对象属性存储
let obj = {
  fn: () => {},
}
obj.fn()
// c、使用数组存储
let arr = [() => {}]
arr[0]()

// argument举例
// 如果返回函数中需要使用父级的arguments，就可以将返回函数写成箭头函数
let sum7 = (a, b) => {
  //console.log(arguments)//arguments is not defined
}
sum7(1, 2)

function outer() {
  // arguments = [4, 5, 6]
  let sum8 = (a, b) => {
    console.log(arguments) //[4, 5, 6]
  }
  sum8(1, 2)
}
outer(4, 5, 6)

// 箭头函数的this
var k = 'window-a'

let obj1 = {
  k: 'obj1-a',
  fn: () => {
    // this指向window
    console.log(this.k) //window-a
  },
}
obj1.fn()

let obj2 = {
  k: 'obj2-a',
  function() {
    // this指向调用者
    let fn2 = () => {
      // this指向非箭头函数的this
      console.log(this.k) //obj2-a
    }
    fn2()
  },
}
obj2.function()

// this的实际使用
var ms = 'ourTerms'
let obj3 = {
  ms: 'abd',
  fn() {
    var self = this
    setTimeout(function () {
      console.log(this.ms) //ourTerms -- this指向window
      console.log(self.ms) //abd -- this指向obj3
    }, 200)
  },
  fn2() {
    // this指向调用者
    setTimeout(() => {
      console.log(this.ms) //abd -- this指向fn2的this，在函数定义时决定的，不会改变
    }, 500)
  },
}
obj3.fn()

// 箭头函数处理数组
let arr3 = [10, 20, 30, 40]
console.log(
  arr3.filter(function (ele) {
    return ele > 20 //[30, 40]
  })
)
// 与之前相比代码量更少了
console.log(arr3.filter((ele) => ele > 20)) //[30, 40]
