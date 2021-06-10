// import 语法只能放到顶级作用域中
// _ 是export default导出的变量，当初的变量不能改变
// import _,{c,b} from './02-export.js'

// 将所有结果导入一个文件中
// import * as obj from './02-export.js'

// 文件合并导出
// import * as obj from './total.js'

// 有副作用的导入，会执行文件，但是没有使用文件中的任何变量
// import './02-export.js'
setInterval(() => {
    console.log(c,b)
})

console.log(obj)

// 动态加载
let btn = document.createElement('button')
btn.addEventListener('click', function(){
    // import语法返回的是一个promise
    import('./02-export.js').then(data=>{
        console.log(data)
    })
})
