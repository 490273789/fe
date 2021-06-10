const fs = require("fs").promises;
const path = require("path");

function* read() {
  let content = yield fs.readFile(
    path.resolve() + "/ES6/生成器/name.txt",
    "utf8"
  );
  let age = yield fs.readFile(content, "utf8");
  return age;
}

let name = read();

name.next().value.then((data) => {
  name.next(data).value.then((data) => {
    let age = name.next(data);
    console.log("age: ", age);
  });
});
// co库

function co(it) {
  return new Promise((resolve, reject) => {
    // 异步迭代需要 提供一个next方法
    function next(data) {
      let { value, done } = it.next(data);
      if (!done) {
        Promise.resolve(value).then(
          (data) => {
            next(data);
          },
          (err) => {
            it.throw(err);
          }
        );
      } else {
        resolve(value);
      }
    }
    next();
  });
}

co(read()).then((data) => {
  console.log(data);
});

const fs = require("fs").promises;
const path = require("path");
// async + await 其实是 generator + co的语法糖
async function read1() {
  // let r = await Promise.all([p1,p2])
  let content = await fs.readFile(
    path.resolve() + "/ES6/生成器/name.txt",
    "utf8"
  );
  let age = await fs.readFile(content, "utf8");
  return age;
}

read1().then((data) => {
  console.log(data);
});

const fs = require("fs").promises;
const path = require("path");
// async + await 其实是 generator + co的语法糖
async function read2() {
  const p1 = fs.readFile(path.resolve() + "/ES6/生成器/name.txt", "utf8");
  const p2 = fs.readFile(path.resolve() + "/ES6/生成器/sex.txt", "utf8");
  const r = await Promise.all([p1, p2]);
  return r;
}

read2().then((data) => {
  console.log(data);
});
