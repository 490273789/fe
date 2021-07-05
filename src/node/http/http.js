// 通过node实现一个http服务
// 通过http核心模块来提供
const http = require('http')
const url = require('url')

let port = 3000

// 服务器要有特定的ip和端口号
const server = http.createServer()

// 开启一个端口
server.listen(port, () => {
  console.log('server start ' + port)
})

// 如果端口被占用，自动加1
server.on('error', (err) => {
  if (err.erron === 'EADDRINUSE') {
    server.listen(++port)
  }
})

// 如果别人请求，解析请求
server.on('request', (req, res) => {
  // req 代表的是客户端
  // res 代表的是服务器端
  // 一个完整的URL
  // const testUrl = 'http://username:password@www.baidu.com:80/user?name=wsn&age=13#app'

  // 1、请求行
  console.log(req.method)
  console.log(req.url)

  const { pathname, query } = url.parse(req.url, true)
  console.log(req.httpVersion)

  // 请求头
  console.log(req.headers) // 注意拿回来的内容都是小写

  // 请求体
  const arr = []
  req.on('data', (chunk) => {
    // 流的原理 push(null) data不一定会触发
    arr.push(chunk)
  })

  req.on('end', () => {
    // 响应行
    res.statusCode = 404 // 响应状态码
    // 响应头
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    // 响应体
    res.end(Buffer.concat(arr).toString())
  })
})

// 默认每次服务器端代码发生变化都需要重新启动服务
// nodemon node的监视器 见识文件发生变化了自动重启
// sodu npm install nodemon -g
// 使用 nodemon 文件名
