// 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
// 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
// 链表问题的中心思想：处理链表的本质是处理链表节点之间的指针关系
const mergeTwoList = function (l1, l2) {
  const head = {
    value: null,
    next: null,
  }

  let current = head

  while (l1 && l2) {
    if (l1.value <= l2.value) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  current.next = l1 !== null ? l1 : l2

  return head.next
}

const l1 = {
  // 数据域
  value: 1,
  // 指针域，指向下一个结点的引用
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
}

const l2 = {
  // 数据域
  value: 1,
  // 指针域，指向下一个结点的引用
  next: {
    value: 4,
    next: {
      value: 5,
      next: null,
    },
  },
}

// console.log(mergeTwoList(l1, l2))

function forLink(link) {
  while (link) {
    console.log(link.value)
    link = link.next
  }
}

forLink(mergeTwoList(l1, l2))

// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3

const l3 = {
  // 数据域
  value: 1,
  // 指针域，指向下一个结点的引用
  next: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    },
  },
}

function sortLink(link) {
  const head = link

  while (link && link.next) {
    if (link.value === link.next.value) {
      link.next = link.next.next
    } else {
      link = link.next
    }
  }

  return head
}

console.log('sortLink:',sortLink(l3))


// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3
const l4 = {
  // 数据域
  value: 1,
  // 指针域，指向下一个结点的引用
  next: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    },
  },
}

function deleteDuplicates(link) {
  if(!link || !link.next) {
    return
  }

  const dummy = {
    value: null,
    next: null,
  }

  dummy.next = link

  let current = dummy
  console.log(dummy)
  while (current.next && current.next.next) {
    if (current.next.value === current.next.next.value) {
      const value = current.next.value
      while(current.next && current.next.value === value) {
        current.next = current.next.next
      }
    } else {
      current = current.next
    }
  }

  return dummy.next
}

console.log('deleteDuplicates:',deleteDuplicates(l4))
