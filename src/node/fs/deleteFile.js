const fs = require('fs')
const path = require('path')

// b
//    c
//    d
//        f
//    e
// 前序深度 串联
function preDeep(dir, callback) {
  // 有儿子就删除儿子
  // 没有儿子就删除自己，只想第一层和第二层的关系
  fs.stat(dir, function (err, statObj) {
    console.log(dir)
    // 判断是文件还是文件夹
    // 如果是文件则直接删除
    if (statObj.isFile()) {
      fs.unlink(dir, callback)
    } else {
      // 读取文件夹下是否还有其他内容
      fs.readdir(dir, function (err, dirs) {
        dirs = dirs.map((item) => path.join(dir, item))
        let index = 0
        console.log(dirs)
        function next() {
          if (index === dirs.length) return fs.rmdir(dir, callback)
          let currentPath = dirs[index++]
          preDeep(currentPath, next)
        }
        next()
      })
    }
  })
}

function callback() {
  console.log('delete successful!')
}

preDeep('a', callback)

// 前序 深度 并行
function preAllDeep(dir, callback) {
  fs.stat(dir, function (err, statObj) {
    console.log(dir)
    // 判断是文件还是文件夹
    // 如果是文件则直接删除
    if (statObj.isFile()) {
      fs.unlink(dir, callback)
    } else {
      // 读取文件夹下是否还有其他内容
      fs.readdir(dir, function (err, dirs) {
        dirs = dirs.map((item) => path.join(dir, item))
        let index = 0
        console.log(dirs)
        function next() {
          if (index === dirs.length) return fs.rmdir(dir, callback)
          let currentPath = dirs[index++]
          preDeep(currentPath, next)
        }
        next()
      })
    }
  })
}

// 前序 深度 并行 promise
function prePromiseDeep(dir, callback) {
  fs.stat(dir, function (err, statObj) {
    console.log(dir)
    // 判断是文件还是文件夹
    // 如果是文件则直接删除
    if (statObj.isFile()) {
      fs.unlink(dir, callback)
    } else {
      // 读取文件夹下是否还有其他内容
      fs.readdir(dir, function (err, dirs) {
        dirs = dirs.map((item) => path.join(dir, item))
        let index = 0
        console.log(dirs)
        function next() {
          if (index === dirs.length) return fs.rmdir(dir, callback)
          let currentPath = dirs[index++]
          preDeep(currentPath, next)
        }
        next()
      })
    }
  })
}

// 前序 深度 并行 async
function preAsynceDeep(dir, callback) {
  fs.stat(dir, function (err, statObj) {
    console.log(dir)
    // 判断是文件还是文件夹
    // 如果是文件则直接删除
    if (statObj.isFile()) {
      fs.unlink(dir, callback)
    } else {
      // 读取文件夹下是否还有其他内容
      fs.readdir(dir, function (err, dirs) {
        dirs = dirs.map((item) => path.join(dir, item))
        let index = 0
        console.log(dirs)
        function next() {
          if (index === dirs.length) return fs.rmdir(dir, callback)
          let currentPath = dirs[index++]
          preDeep(currentPath, next)
        }
        next()
      })
    }
  })
}
