# 7-1. 普通符号

符号是 ES6 新增的一个数据类型，它通过使用函数 `Symbol(符号描述)` 来创建

符号设计的初衷，是为了给对象设置私有属性

私有属性：只能在对象内部使用，外面无法使用

符号具有以下特点：

- 没有字面量
- 使用 typeof 得到的类型是 symbol
- **每次调用 Symbol 函数得到的符号永远不相等，无论符号名是否相同**
- 符号可以作为对象的属性名存在，这种属性称之为符号属性
  - 开发者可以通过精心的设计，让这些属性无法通过常规方式被外界访问
  - 符号属性是不能枚举的，因此在 for-in 循环中无法读取到符号属性，Object.keys 方法也无法读取到符号属性
  - Object.getOwnPropertyNames 尽管可以得到所有无法枚举的属性，但是仍然无法读取到符号属性
  - ES6 新增 Object.getOwnPropertySymbols 方法，可以读取符号
- 符号无法被隐式转换，因此不能被用于数学运算、字符串拼接或其他隐式转换的场景，但符号可以显式的转换为字符串，通过 String 构造函数进行转换即可，console.log 之所以可以输出符号，是它在内部进行了显式转换

# 7-2. 共享符号

根据某个符号名称（符号描述）能够得到同一个符号

```js
Symbol.for('符号名/符号描述') //获取共享符号
```

# 7-3. 知名（公共、具名）符号

知名符号是一些具有特殊含义的共享符号，通过 Symbol 的静态属性得到

ES6 延续了 ES5 的思想：减少魔法，暴露内部实现！

因此，ES6 用知名符号暴露了某些场景的内部实现

1. Symbol.hasInstance

该符号用于定义构造函数的静态成员，它将影响 instanceof 的判定

```js
obj instanceof A

//等效于

A[Symbol.hasInstance](obj) // Function.prototype[Symbol.hasInstance]
```

2. [扩展] Symbol.isConcatSpreadable

该知名符号会影响数组的 concat 方法

3. [扩展] Symbol.toPrimitive

该知名符号会影响类型转换的结果

4. [扩展] Symbol.toStringTag

该知名符号会影响 Object.prototype.toString 的返回值

5. 其他知名符号
