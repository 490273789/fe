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
const dfsTraversalPreorder = (data) => {
  const result = []
  const dfs = (node) => {
    node.forEach((node) => {
      result.push(node.value)
      if (node.children && node.children.length) {
        dfs(node.children)
      }
    })
  }
  dfs(data)
  return result
}

console.log('dfsTraversalPreorder: ', dfsTraversalPreorder(data))

// 非递归
// 深度优先
// 依赖栈结构
const dfs = (data) => {
  const result = []
  const stack = [...data]
  while (stack.length) {
    const top = stack.pop()
    result.push(top.value)
    const len = top.children.length
    for (let i = 0; i < len; i++) {
      stack.push(top.children[i])
    }
  }

  return result
}

console.log('dfs: ', dfs(data))
