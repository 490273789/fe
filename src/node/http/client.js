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
    a: 1,
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
