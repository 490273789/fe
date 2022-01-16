API 参考: https://www.yuque.com/docs/share/bf3504cc-b9d2-4c57-846f-94d33a109740?# 《String》

# 更好的 Unicode 支持

早期，由于存储空间宝贵，Unicode 使用 16 位二进制来存储文字。我们将一个 16 位的二进制编码叫做一个码元（Code Unit）。

后来，由于技术的发展，Unicode 对文字编码进行了扩展，将某些文字扩展到了 32 位（占用两个码元），并且，将某个文字对应的二进制数字叫做码点（Code Point）。

ES6 为了解决这个困扰，为字符串提供了方法：codePointAt，根据字符串码元的位置得到其码点。

同时，ES6 为正则表达式添加了一个 flag: u，如果添加了该配置，则匹配时，使用码点匹配

# 更多的字符串 API

以下均为字符串的实例（原型）方法

- includes

判断字符串中是否包含指定的子字符串

- startsWith

判断字符串中是否以指定的字符串开始

- endsWith

判断字符串中是否以指定的字符串结尾

- repeat

将字符串重复指定的次数，然后返回一个新字符串。