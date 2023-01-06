// breadth first search
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

// 依赖于对队列，先进先出
//  广度优先
const bfs = (data) => {
  const result = []
  const queue = [...data]
  while (queue.length) {
    const first = queue.shift()
    result.push(first.value)
    const len = first.children.length
    for (let i = 0; i < len; i++) {
      queue.push(first.children[i])
    }
  }
  return result
}

console.log('bfs2: ', bfs(data))
