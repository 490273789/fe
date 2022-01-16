const data = [
  {
    value: '0-1',
    children: [
      {
        value: '0-1-1',
        children: [
          {
            value: '0-1-1-1',
            children: [],
          },
        ],
      },
      {
        value: '0-1-2',
        children: [],
      },
      {
        value: '0-1-3',
        children: [
          {
            value: '0-1-3-1',
            children: [],
          },
        ],
      },
    ],
  },
  {
    value: '0-2',
    children: [
      {
        value: '0-2-1',
        children: [
          {
            value: '0-2-1-1',
            children: [],
          },
          {
            value: '0-2-1-2',
            children: [],
          },
        ],
      },
      {
        value: '0-2-2',
        children: [],
      },
    ],
  },
]

// Depth First Search
// 递归版本-前序
const dfsWidth1 = (node) => {
  const result = [] // 存放结果
  const dfs = (node) => {
    node.forEach((ele) => {
      result.push(ele.value)
      if (ele.children && ele.children.length) {
        dfs(ele.children)
      }
    })
  }
  dfs(node)
  return result
}
// console.log(dfsWidth1(data))

// 递归版本-中序遍历
const dfsWidth2 = (node) => {
  const result = [] // 存放结果
  const dfs = (node) => {
    node.forEach((ele) => {
      if (ele.children && ele.children.length) {
        dfs(ele.children)
      }
      result.push(ele.value)
    })
  }
  dfs(node)
  return result
}
// console.log(dfsWidth2(data))

// 递归版本-后序
const dfsWidth3 = (node) => {
  const result = [] // 存放结果
  const dfs = (node) => {
    node.forEach((ele) => {
      result.push(ele.value)
      if (ele.children && ele.children.length) {
        dfs(ele.children)
      }
    })
  }
  dfs(node)
  return result
}
// console.log(dfsWidth3(data))

// 非递归
const dfsWidth4 = (node) => {
  const result = [] // 存放结果
  const dfs = (data) => {
    const stack = [data]
    while(stack.length) {
      const node = stack.pop()
      const length = node.length
      for(let i = 0; i < length; i ++) {
        result.push(node[i].value)
        if(node[i].children && node[i].children.length) {
          stack.push(node[i].children)
        }
      }
    }
    
  }
  dfs(node)
  return result
}
console.log(dfsWidth4(data))

