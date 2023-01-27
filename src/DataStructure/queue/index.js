// 在javascript中队列的实现需要依赖于数组，可以把队列看做成特别的数组
// 队列 - 先进先出（FIFO）对数组的操作只需要push和shift即可，只允许从尾部添加元素和头部删除元素
// 概念：入列、出列
// enqueue() 入列
// dequeue() 出列
// front() 查看队列头
// isEmpty() 队列是否为空
// size() 队列大小
// 排队取餐的操作

class Queue {
  queue = []

  /**
   * 入队列
   * @param value
   */
  enqueue(value) {
    this.queue.push(value)
  }

  /**
   * 出队列
   * @returns {*}
   */
  dequeue() {
    return this.queue.shift()
  }

  /**
   * 队列是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return !!this.queue.length
  }

  /**
   * 队列大小
   * @returns {number}
   */
  size() {
    return this.queue.length
  }
}

const queue1 = new Queue()
queue1.enqueue('person1')
queue1.enqueue('person2')
queue1.enqueue('person3')
queue1.enqueue('person4')
