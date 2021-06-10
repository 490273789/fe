const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
const resolvePromise = (promise2, x, resolve, reject) => {
    if (promise2 === x) { //自己等待自己完成
        return reject(new TypeError("Chanining cycle detected for promise #<Promise></Promise>"))
    }
    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        let called; //定义一个锁，防止多次调用
        try { // x.then如果报错则不是Promis
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => { //x.then会在调用一次then，反之代码里有i++的操作
                    if (called) return; //防止多次调用
                    called = true;
                    // y取resolve传递的变量，有可能还是一个Promise， 使用递归实现进一步的解析
                    resolvePromise(promise2, y, resolve, reject);
                }, r => { //走到这一步说明这个Promise走的reject，后面的then直接调用reject
                    if (called) return; //防止多次调用
                    called = true;
                    reject(r);
                })

            } else { //常量直接跑出去即可
                resolve(x);
            }
        } catch (e) {
            if (called) return; //防止多次调用
            called = true;
            reject(e); //取then的时候抛出异常，报错就好了
        }
    } else {
        // 返回的不是Promise
        resolve(x);
    }
}
class Promise {
    constructor(executor) {
        // 创建Promise，executor会立即执行
        this.value = undefined;
        this.reason = undefined;
        this.onResolve = [];
        this.onReject = [];
        this.status = PENDING;
        let resolve = (value) => {
            if (value instanceof Promise) {
                return value.then(resolve, reject);//递归，和resolvePromise的功能是一样的
            }
            if (this.status === PENDING) {
                this.value = value;
                this.status = FULFILLED
                this.onResolve.forEach(fn => fn());
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.onReject.forEach(fn => fn());
            }
        }

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onFulfilled, onRejected) {
        // 可选参数，没有传参数则给默认参数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw err
        };
        let promise2 = new Promise((resolve, reject) => {
            // 在返回的Promise中取到上一次的状态，来决定这个Promise2是成功还是失败
            if (this.status === FULFILLED) {
                setTimeout(() => { //使用异步操作来调用promise2，如果不是用异步操作是无法调用promise的
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }

                })
            }
            if (this.status === PENDING) {
                this.onResolve.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    })
                });
                this.onReject.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }

                    })
                });
            }
        })
        return promise2;
    }
    catch(errCallback){
        return this.then(null,errCallback)
    }

    static resolve(value) {
        return new Promise((resolve, reject) => {
            resolve(value);
        })
    }
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }
}

// test Promise 
// 安装测试包：sudo npm install promises-aplus-tests -g
// 测试指令：promises-aplus-tests promise.js
Promise.deferred = function() {
    let dtd = {};
    dfd.promise = new Promise((resolve,reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}
// commonjs    
// es是export default
module.exports = Promise;