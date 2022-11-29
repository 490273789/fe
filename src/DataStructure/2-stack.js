// 在javascript中栈的实现需要依赖于数组，可以把栈看做成特别的数组
// 栈 - 后进先出（LIFO）对数组的操作只需要pop和push即可，只允许从尾部添加元素和从尾部删除元素
// 实现放置冰激凌和卖冰激凌的操作

const stack = []

stack.push('东北大板')
stack.push('中街大板')
stack.push('北京大板')
stack.push('南京大板')

while (stack.length) {
  const top = stack[stack.length - 1]
  console.log(top)
  stack.pop()
}

// 使用类实现
class StackOption {
  constructor() {
    this.stack = []
  }

  add(value) {
    this.stack.push(value)
    this.show()
  }

  outStack() {
    this.stack.pop()
    this.show()
  }

  show() {
    console.log(this.stack)
  }
}

const stack1 = new StackOption()
stack1.add('o1')
stack1.add('o2')
stack1.add('o3')
stack1.add('o4')
stack1.outStack()
stack1.outStack()
stack1.outStack()
stack1.outStack()
