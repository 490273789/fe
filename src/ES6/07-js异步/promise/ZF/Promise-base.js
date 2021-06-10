// Promise是一个类
// 1、每次new一个promise 都需要传递一个执行器，执行器是立即执行的
// 2、执行器中有两个参数 resolve和reject
// 3、默认Promise有三个状态：pending 、resolve、reject
// 4、如果一旦成功了 就不能失败，失败了也不能在变为成功
// 5、每个Promise都有一个then方法
let Promise = require('./Promise.js');
let p = new Promise((resolve,reject)=>{
    // resolve('成功');
    // throw new Error('失败')
    setTimeout(() => {
        // resolve("异步成功！")
        resolve("yibu")
    }, 1000);
})
// 链式调用
// 返回值为普通值会走下个then的成功
// 抛出错误会走下个then的失败
// 返回值为Promise的时候就执行promise，采用他的状态
// 链式调用的原理是返回一个新的promise,因为promise的状态一旦改变就不能再次改变了。

p.then(data=>{
    console.log('success',data)
    return new Promise((resolve,reject) => {
        resolve('nihao');
    })
},err=>{
    console.log('error',err)
    
}).then(data=> {
    console.log('resolve2')
    
},err => {
    console.log('reject2')
}).then(data => {
    console.log("resolve3")
},err => {
    console.log('reject3')
})

let Promise = require('./Promise.js');
let p2 = new Promise((resolve, reject) => {
    resolve(new Promise((resolve, reject) => {
        resolve('hello');
    }))
}).then(data => {
    console.log(data)
}, err => {
    console.log(err);
})


// promise.finally  无论如何都会执行 如果返回一个promise，会等待这个Promise执行完成
// promise.try() 可以捕获同步异常和异步异常
Promise.resolve('resolve').then(data => {
    console.log(data);
}, err => {
    console.log(err);
})


Promise.resolve('finally').finally(data => {
    console.log(data)
}).then(data => {
    console.log(data)
},err => {
    console.log(err);
})


