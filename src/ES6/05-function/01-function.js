//返回长度为n的随机数字符串的函数
function Random(n) {
  let max = 1;
  for (let i = 0; i < n; i++) {
    max *= 10;
  }
  return function () {
    let str = "" + parseInt(Math.random() * max); //parseInt
    let count = n - str.length;
    for (let i = 0; i < count; i++) {
      str += "0";
    }
    return str;
  };
}
let random8 = Random(8);
random8();

//函数的默认值
function Person(name) {
  //this.name = name || 'none' //兼容性写法，缺点当name为0、null、undefined、false、‘’的时候会显示都会是none。
  this.name = name === undefined ? "none" : name; //改进写法，ES参数默认值的原理
}

let p1 = new Person("wxb");
let p2 = new Person("");
let p3 = new Person();
let p4 = new Person(undefined);
let p5 = new Person(0);

//一、es6 函数默认值 --  惰性函数  --  不传值得时候才会使用
// 方式1：一个参数
function Person1(name = "none") {
  this.name = name;
}
let p11 = new Person1("wxb");
let p21 = new Person1("");
let p31 = new Person1();
let p41 = new Person1(undefined);
let p51 = new Person1(0);

// 方式2：多参数
//在所传的参数绝对等于undefined的时候会走默认值
function Person3(name, age = 0, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
}
let p12 = new Person("wxb", 6, 30);

//arguments
//ES5中无论是改变实参列表还是改变形参另一个都会跟着改变
function max1(num1, num2) {
  console.log(num1, arguments[0]); //1,1
  console.log(num2, arguments[1]); //5,5
  num1 = 4;
  console.log(num1, arguments[0]); //4,4
  arguments[0] = 6;
  console.log(num1, arguments[0]); //6,6
}
max1(1, 5);
//添加严格模式或者是使用es6的写法（自动添加严格模式），改变形参或者实参不会影响另外一个参数的值
function max2(num1 = 0, num2) {
  console.log(num1, arguments[0]); //1, 1
  console.log(num2, arguments[1]); //5, 5
  num1 = 4;
  console.log(num1, arguments[0]); //4, 1
  arguments[0] = 6;
  console.log(num1, arguments[0]); //4, 6
}
max2(1, 5);

//方式3:调用函数
function getValue() {
  console.log("hello");
  return 6;
}

function count(n, m = getValue()) {
  console.log(n + m);
}

//方式4 --> TDZ
function add(m, n = m) {
  console.log(m + n);
}
add(1, 2); //3
add(1); //2
// 执行原理
// 第一步扫描代码 --> TDZ = [n,m]
// 第二步执行:let m;  --> TDZ = [n]
// 第三步执行:let n = m; --> TDZ[]

// 二、扩展运算符
// 一个函数，把若干数字+1，添加到指定数组当中
// 收集作用- 专门用于收集末尾的所有参数，将其放置到一个形参数组中
// 一个函数，仅能出现一个剩余参数
// // 必须是最后一参数 --> 计算以从左向右执行，当执行到不定参数的时候后计算机不知道还要留几个参数，所以要写在最后一位
function count(arr, ...arg) {
  //arg = [1,2,3,4,5], ...是将括号去掉的操作，所以 ...arg = 1,2,3,4
  console.log(arg); //不定参数是一个类数组
  console.log(arguments); //是一个对象
  for (let i = 0; i < arg.length; i++) {
    arr[i] = arg[i] + 1;
  }
}
let arr = [];
count(arr, 1, 2, 3, 4, 5);

// 扩展运算符 --> ... 扒掉括号的操作([],{}) ...[1,2,3,[4],5] -->1,2,3,[4],5
//求去掉最大值和最小值得平均数
function avearge(...arg) {
  //restArguments
  arg.sort(function (a, b) {
    return a - b;
  });
  arg.pop;
  arg.shift;
  return computedScore(...arg); //读的操作，将数组展开
}
//求平均数
function computedScore(...arg) {
  //写的操作，收集数组
  let sum = 0;
  arg.forEach(function (ele) {
    sum += ele;
  });
  return sum / arg.length;
}
let avg = avearge(12, 13, 45, 98, 1, 23);

var arr1 = [1, 2, 3, 4];
var arr2 = [4, 5, 6, 7];

arr1.concat(arr2); //合并数组
var arr3 = [...arr1, ...arr2]; //合并数组
