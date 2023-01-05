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

// const dfsTraversalPostorder = (node) => {
//   const result = []
//   const dfs = (node) => {
//     node.forEach((node) => {
//       if (node.children && node.children.length) {
//         dfs(node.children)
//       }
//       result.push(node.value)
//     })
//   }

//   dfs(node)
//   return result
// }

// console.log('dfsTraversalPostorder: ', dfsTraversalPostorder(data))

// 深度优先
const dfs = (data) => {
  const result = []
  const stack = [...data]
  while (stack.length) {
    const top = stack.pop()
    result.push(top.value)
    const len = top.children.length
    for(let i = 0; i< len; i++){
      stack.push(top.children[i])
    }
  }

  return result
}

console.log('dfs: ', dfs(data))

//  广度优先
const bfs1 = data => {
  const result = []
  const queue = [data]
  while(queue.length) {
    const first = queue.shift()
    const len = first.length
    for(let i = 0; i < len; i++) {
      result.push(first[i].value)
      if(first[i].children && first.length) {
        queue.push(first[i].children)
      }
    }
  }
  return result
}

console.log('bfs1: ', bfs1(data))


//  广度优先
const bfs2 = data => {
  const result = []
  const queue = [...data]
  while(queue.length) {
    const first = queue.shift()
    result.push(first.value)
    const len = first.children.length
    for(let i = 0; i < len; i++) {
      queue.push(first.children[i])
    }
  }
  return result
}

console.log('bfs2: ', bfs2(data))
