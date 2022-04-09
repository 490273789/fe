const data = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: {
      f: 'f',
    },
    g: {
      g: 'g',
      h: {
        i: 'i',
        j: {
          k: 'k',
        },
      },
    },
  },
  l: {
    m: 'm',
    n: 'n'
  }
}

// 

const deepFirstSearch = (data) => {

  const stack = []
  stack.push(data)
  while(stack.length) {
    item = stack.pop()

    if(item && typeof item === 'object') {
      Object
    }

  }
  
}