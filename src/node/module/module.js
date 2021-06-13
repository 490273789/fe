// module 模块
// node中的js文件就是一个模块
// 为什么出现模块的概念，防止文件命名冲突，可以把同样的功能封装到一起
// esModule commonjs规范
// module.export 导出来给别人使用
// require 来引用别人的模块
// node模块会按照后缀名查找，先查找.js文件是否存在， 然后查找.json文件是否存在
const path = require('path')
const fs = require('fs')
const { runInThisContext } = require('vm')
function Module(id) {
  this.id = id
  this.exports = {} // 模块的结果
}
Module.extensions = {
  '.js'(module) {
    const script = fs.readFileSync(module.id)
    const funcStr = Module.wrap[0] + script + Module.wrap[1]
    const fn = runInThisContext(funcStr)
    fn.call(module.exports, module, module.exports, req, module.id, path.dirname(module.id))
  },
  '.json'(module) {
    const script = fs.readFileSync(module.id)
    module.exports = JSON.parse(script)
  },
}

Module.wrap = ['(function(module,exports,require,__filename,__dirname){', '})']

Module.prototype.load = function () {
  const extname = path.extname(this.id)
  Module.extensions[extname](this)
}
Module.resolveFileName = (fileName) => {
  // 把相对路径转化为绝对路径，默认会判断一下是否是绝对路径
  let asbPath = path.resolve(__dirname, fileName) // 拼接绝对路径
  const flag = fs.existsSync(asbPath) // 判断当前文件是否存在
  let filePath = asbPath
  if (!flag) {
    const keys = Object.keys(Module.extensions)
    const length = keys.length
    for (let i = 0; i < length; i++) {
      filePath = null
      if (fs.existsSync(asbPath + keys[i])) {
        filePath = asbPath + keys[i]
        break
      }
    }
  }
  if (!filePath) {
    // 如果没有说明文件不存在
    throw new Error('文件不存在！')
  }
  return filePath
}
Module.cache = {}
function req(fileName) {
  const currentPath = Module.resolveFileName(fileName)
  // 缓存，如果两次请求相同的路径，则直接返回上次的缓存结果
  if (Module.cache[currentPath]) {
    return Module.cache[currentPath].exports
  }
  const module = new Module(currentPath)
  Module.cache[currentPath] = module
  module.load()
  return module.exports
}

const data = req('./a')
const data1 = req('./a')
console.log(data)
console.log(data1)
