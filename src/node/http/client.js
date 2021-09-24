const http = require('http')

// request / get
// http.get('http://localhost:3000', () => {
//   console.log('发送成功')
// })

// request

const config = {
  port: 3000,
  hostname: 'localhost',
  headers: {
    'Content-type': '',
  },
  method: 'POST',
}

const client = http.request(config, (res) => {
  res.on('data', function (chunk) {
    console.log(chunk.toString())
  })
})
client.end('a=1')
// 传输格式
// 1、json字符串
// 2、form表单  a=1$b=2
// 3、文件格式 图片 formData
// 4、传递字符串

// node 适合i/o密集
// 1）服务器可以返回静态资源
// 2）我的服务器动态的资源 - 接口
// 2）访问别人的服务器，把别人的服务器的结果格式化后返回去
