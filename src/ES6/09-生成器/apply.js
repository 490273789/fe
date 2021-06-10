
// ... 和 for of必须给当前对象提供一个生成器方法 
const it1 = [
  ...{
    0: "one",
    1: "two",
    2: "three",
    length: 3,
    [Symbol.iterator]() {
      let len = this.length;
      let index = 0;
      //   调用迭代器的next方法， 方法执行后需要返回 value,done
      return {
        next: () => {
          return { value: this[index], done: index++ === len };
        },
      };
    },
  },
];

console.log(it2)

const it2 = [
    ...{
      0: "one",
      1: "two",
      2: "three",
      length: 3,
      [Symbol.iterator]: function *() {
        let index = 0
        while( index < this.length) {
            yield this[index++]
        }
      },
    },
  ];
  
  console.log(it2)

  