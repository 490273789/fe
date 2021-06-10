let fs = require('fs').promises;

// Promise.all  全部成功才算成功，有一个失败就会失败，
// 按照参数顺序执行
const isPromise = value => {
    if ((typeof value === 'object' && value !== null) || typeof value === 'function') {
        return typeof value.then === 'function'
    }
}
Promise.all = function(promises) {
    return new Promise((resolve,reject) => {
        let arr = [];
        let i = 0;
        let processData = (index, value) => {
            arr[index] = value;
            if (++i === promises.length) {
                resolve(arr);
            }
        }
        for(let i = 0; i < promises.length; i++ ) {
            let current = promises[i];
            if (isPromise(current)) {
                current.then(data => {
                    processData(i,data);
                },reject)
            }else {
                processData(i, current);
            }
        }
    })
}
Promise.all([fs.readFile('./name.txt','utf8'),fs.readFile('./age.txt','utf8')]).then(data => {
    console.log(data);
})



