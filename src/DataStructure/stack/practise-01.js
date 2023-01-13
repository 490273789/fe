// 判断扩号的有效性 
// [{()}] - true
// 输入: "([)]"
// 输出: false
// 输入: "{[]}"
// 输出: true
// 输入: "(]"
// 输出: false

function mapLeftAndRight(str) {

  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  const stack = []

  const len = str.length

  for(let i = 0; i < len; i++) {
    const item = str[i]
    if(item === "(" || item === "{" || item === "[") {
      
      stack.push(map[item])
    }else {

      if(!stack.length || stack.pop() !== item) {
        
        return false
      }
      
    }
  }
  
  return !stack.length
}
console.log(mapLeftAndRight("([)]"))
console.log(mapLeftAndRight("{([])}"))
