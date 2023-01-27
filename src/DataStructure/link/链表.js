class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = null
    this.length = 0
  }
  /**
   *获取链表
   */
  getList() {
    return this.head
  }

  /**
   * 链表的尾部追加节点
   * @param value
   */
  append(value) {
    let node = new Node(value)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      this.length++
    }
  }

  /**
   * 在链表的指定位置追加节点
   * @param position 指定链表的位置
   * @param value 插入节点的值
   */
  insert(position, value) {
    if (position >= 0 && position < this.length) {
      const node = new Node(value)
      let index = 0,
        pre = null,
        current = this.head
      if (position === 0) {
        this.head = node
        node.next = current
      } else {
        debugger
        while (index < position) {
          pre = current
          current = current.next
          index++
        }
        pre.next = node
        node.next = current
        this.length++
      }
    } else {
      throw new Error('索引越界')
    }
  }

  /**
   * 删除值为 value 的节点
   * @param value 节点的值
   */
  remove(value) {
    if (this.head && this.head.value === value) {
      this.head = this.head.next
      this.length--
    } else {
      let current = this.head,
        pre = null
      while (current.next && current.value !== value) {
        pre = current
        current = current.next
      }

      pre.next = current.next
      this.length--
    }
  }

  /**
   * 删除某个位置的节点
   * @param position 节点的位置
   */
  removeAt(position) {
    if (position === 0) {
      this.head = this.head.next
    } else {
      let current = this.head,
        pre = null
      let index = 0
      while (current.next && index < position) {
        index++
        pre = current
        current = current.next
      }
      pre.next = current.next
      this.length--
    }
  }

  /**
   *链表是否为空
   */
  isEmpty() {
    return !!this.length
  }

  /**
   *查询链表大小
   */
  size() {
    return this.length
  }
}

const linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.append(3)

linkList.insert(1, 5)
linkList.remove(5)
linkList.insert(1, 6)
linkList.removeAt(1)

const l = linkList.getList()
console.log(l)

// 反转链表
const reverseLink = (node) => {
  let preNode = null
  let currentNode = node
  let nextNode = null

  while (currentNode.next) {
    nextNode = currentNode.next
    currentNode.next = preNode
    preNode = currentNode
    currentNode = nextNode
  }
  currentNode.next = preNode
  return currentNode
}

console.log('reverseLink:', reverseLink(l))
