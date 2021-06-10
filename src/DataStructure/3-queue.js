// 在javascript中队列的实现需要依赖于数组，可以把队列看做成特别的数组
// 队列 - 先进先出（FIFO）对数组的操作只需要push和shift即可，只允许从尾部添加元素和头部删除元素

// 排队取餐的操作

const queue = []

queue.push('people1')
queue.push('people2')
queue.push('people3')
queue.push('people4')

while (queue.length) {
  const top = queue[0]
  console.log(top)

  queue.shift()
}

// class实现queue

class QueueOption {
  constructor() {
    this.queue = []
  }

  add(value) {
    this.queue.push(value)
    this.show()
  }

  outQueue() {
    this.queue.shift()
    this.show()
  }

  show() {
    console.log(this.queue)
  }
}

const queue1 = new QueueOption()
queue1.add('person1')
queue1.add('person2')
queue1.add('person3')
queue1.add('person4')

queue1.outQueue()
queue1.outQueue()
queue1.outQueue()
queue1.outQueue()
