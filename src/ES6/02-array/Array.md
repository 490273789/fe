API 参考： https://www.yuque.com/docs/share/bc8f2db1-5260-4e60-afe9-7ea57bb9370f?# 《常用方法》

# 新增的数组 API

## 静态方法

- Array.of(...args): 使用指定的数组项创建一个新数组
- Array.from(arg): 通过给定的类数组 或 可迭代对象 创建一个新的数组。

## 实例方法

- find(callback): 用于查找满足条件的第一个元素
- findIndex(callback)：用于查找满足条件的第一个元素的下标
- fill(data)：用指定的数据填充满数组所有的内容
- copyWithin(target, start?, end?): 在数组内部完成复制
- includes(data)：判断数组中是否包含某个值，使用 Object.is 匹配

# [扩展]类型化数组

## 数字存储的前置知识

1. 计算机必须使用固定的位数来存储数字，无论存储的数字是大是小，在内存中占用的空间是固定的。

2. n 位的无符号整数能表示的数字是 2^n 个，取值范围是：0 ~ 2^n - 1

3. n 位的有符号整数能表示的数字是 2^n 个，取值范围是：-2^(n-1) ~ 2^(n-1) - 1

4. 浮点数表示法可以用于表示整数和小数，目前分为两种标准：

   1. 32 位浮点数：又称为单精度浮点数，它用 1 位表示符号，8 位表示阶码，23 位表示尾数
   2. 64 位浮点数：又称为双精度浮点数，它用 1 位表示符号，11 位表示阶码，52 位表示尾数

5. JS 中的所有数字，均使用双精度浮点数保存

## 类型化数组

类型化数组：用于优化多个数字的存储

具体分为：

- Int8Array： 8 位有符号整数（-128 ~ 127）
- Uint8Array： 8 位无符号整数（0 ~ 255）
- Int16Array: ...
- Uint16Array: ...
- Int32Array: ...
- Uint32Array: ...
- Float32Array:
- Float64Array

1. 如何创建数组

```js

new 数组构造函数(长度)

数组构造函数.of(元素...)

数组构造函数.from(可迭代对象)

new 数组构造函数(其他类型化数组)

```

2. 得到长度

```js
数组.length //得到元素数量
数组.byteLength //得到占用的字节数
```

3. 其他的用法跟普通数组一致，但是：

- 不能增加和删除数据，类型化数组的长度固定
- 一些返回数组的方法，返回的数组是同类型化的新数组

# ArrayBuffer

ArrayBuffer：一个对象，用于存储一块固定内存大小的数据。

```js
new ArrayBuffer(字节数)
```

可以通过属性`byteLength`得到字节数，可以通过方法`slice`得到新的 ArrayBuffer

## 读写 ArrayBuffer

1. 使用 DataView

通常会在需要混用多种存储格式时使用 DataView

2. 使用类型化数组

实际上，每一个类型化数组都对应一个 ArrayBuffer，如果没有手动指定 ArrayBuffer，类型化数组创建时，会新建一个 ArrayBuffer
