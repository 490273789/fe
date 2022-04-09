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

const bfsWith1 = (source) => {
  const result = []
  bfs = (data) => {
    const stack = []
    stack.push(data)
    while (stack.length) {
      const node = stack.shift()
      node.forEach((ele) => {
        result.push(ele.value)
        if (ele.children.length) {
          stack.push(ele.children)
        }
      })
    }
  }
  bfs(source)
  return result
}

const bfsWith2 = (source) => {
  const result = []
  bfs = (data) => {
    const stack = []
    stack.push(data)
    while (stack.length) {
      const node = stack.shift()
      const len = node.length
      for (let i = 0; i < len; i++) {
        result.push(node[i].value)
        if(node[i].children.length) {
          stack.push(node[i].children)
        }
      }
    }
  }
  bfs(source)
  return result
}

console.log(bfsWith2(data))
