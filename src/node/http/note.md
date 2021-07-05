## Header

## http 状态码

- 101 webscoket 双向通信
- 200 成功 204 没有响应体 206 断点续传
- 301（永久重定向）302（临时重定向）304（缓存）只能服务器端设置
- 401（没有权限） 403（登录了没有权限） 404 405（不支持请求的方法）
- 502 负载均衡 500 服务器问题

## 请求方法 RestfulAPI

- get 获取资源
- post 新增资源
- put 上传文件 修改
- delete 删除文件
- options 跨域的时候出现（复杂请求的时候）
  - 复杂请求：put / delete
  - get 和 post 都是简单请求，加上了自定义的 header 后也会变成复杂请求。

## url 传输数据

- 请求行 url
- 请求头 可以自定义
- 请求体 提交的数据

- 响应行 状态码
- 响应体 可以自定义 header
- 响应内容 返回给浏览器的结果

url.parse
Url {
protocol: 'http:',
slashes: true, //请求地址中是否有 '/'
auth: 'username:password', // 用户信息
host: 'www.baidu.com:80',
port: '80',
hostname: 'www.baidu.com',
hash: '#app',
search: '?name=wsn&age=13',
query: [Object: null prototype] { name: 'wsn', age: '13' },
pathname: '/user', // 资源路径
path: '/user?name=wsn&age=13',
href: 'http://username:password@www.baidu.com:80/user?name=wsn&age=13#app'
}
