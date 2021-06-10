const fs = require('fs')
const template = fs.readFileSync(`${__dirname}/index.html`, 'utf8')
const obj = { arr: [1, 2, 3], name: 'wsn', age: 18 }

/**
 * @description: 模板引擎实现原理1、with语法 2、 new Function()
 * @param {string} template 导入的模板
 * @param {object} obj 传入的数据
 * @return {*}
 */
function render(template, obj) {
  let head = 'let str = "";\r\n'
  head += 'with(xxx){\r\n'
  let content = 'str += `'
  // {%=name%}
  template = template.replace(/\{\%\=(.+?)\%\}/g, function () {
    return obj[arguments[1]]
  })
  // 解析{{item}}
  template = template.replace(/\{\{(.+?)\}\}/g, function () {
    return '${' + arguments[1] + '}'
  })
  // 解析{%arr.forEach(item=>{%}
  content += template.replace(/\{\%(.+?)\%\}/g, function () {
    return '`\r\n' + arguments[1] + '\r\nstr+=`'
  })
  let tail = '`\r\n}\r\n return str;'
  console.log(head + content + tail)
  let fn = new Function('xxx', head + content + tail)
  return fn(obj)
}

let r = render(template, obj)
console.log(r)
