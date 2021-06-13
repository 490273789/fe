// 继承
const util = require('util')
function Parent() {}

Parent.prototype.say = () => {
  console.log('is me')
}

function Child() {}

// 继承的方法
// Child.prototype.__proto__ = Parent.prototype

// inherits 的底层原理
// Reflect.setPrototypeOf(Child.prototype, Parent.prototype)

// Child.prototype = Object.create(Parent.prototype)

util.inherits(Child, Parent)
