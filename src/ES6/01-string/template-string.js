// 模板字符串``

// ${} 变量

// 标记
let input = 123
const text = safe`<div>
${input}
</div>`

function safe(arr, ...args) {
  console.log(arr, args)
}
