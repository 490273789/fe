// 在javascript中栈的实现需要依赖于数组，可以把栈看做成特别的数组
// 栈 - 后进先出（LIFO）对数组的操作只需要pop和push即可，只允许从尾部添加元素和从尾部删除元素
// 概念：出栈 入栈 栈顶 栈底
// 栈的操作：isEmpty() 是否为空
// clear() 清空栈
// size() 栈元素个数
// push() 入栈
// pop() 出栈
// peek() 查看栈顶

class Stack {
  stack = []

  // 添加元素
  push(item) {
    this.stack.push(item)
  }

  // 移出元素
  pop() {
    return this.stack.pop()
  }

  // 获取栈顶元素
  peek() {
    return this.stack[this.stack.length - 1]
  }

  // 清空栈
  clear() {
    return (this.stack.length = 0)
  }

  // 栈的元素数量
  size() {
    return this.stack.length
  }
}
// 应用
// 十进制转二进制
function transform(num) {
  const stack = new Stack()
  let result = ''
  debugger
  while (num > 0) {
    const remainder = num % 2
    stack.push(remainder)
    num = Math.floor(num / 2)
  }

  while (stack.size()) {
    result += stack.pop()
  }

  return result
}

console.log(transform(10))
