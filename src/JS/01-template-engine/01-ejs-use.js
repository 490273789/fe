// 模板引擎

// 常见的模板引擎 ejs jade handlerbar underscore numjumks
// 体验 ejs
// npm install ejs
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const currentPath1 = path.resolve()
const currentPath2 = path.resolve('./JS')
console.log(currentPath1, currentPath2)
const template = fs.readFileSync(`${__dirname}/template.html`, 'utf8')
console.log(template)
// const r = ejs.render(template, {name: 'wsn'})
const r = ejs.render(template, { arr: [1, 2, 3, 4], name: 'wsn' })
console.log(r)
