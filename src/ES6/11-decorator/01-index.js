// 装饰器 装饰模式，在执行类之前可以进行包装（实验性语法）

// 装饰器 必须是一个函数，只能修饰类 (类中的属性 还有类中的方法)
// 参数分别是类的原型、装饰的key和key对应的属性描述器
@type1('哺乳类1')
@type2('哺乳类2')
class Animal{
    @readonly PI = 3.14
    @before
    say() {
        console.log('say')
    }
}

// 对类进行扩展
function type1(type1){
    console.log('t1')
    return function(Constructor) {
        console.log('innerT1')
        Constructor.type1 = type1
    }
}

// 对类进行扩展
function type2(type2){
    console.log('t2')
    return function(Constructor) {
        console.log('innerT2')
        Constructor.type2 = type2
    }
}

/**
 * @description: 
 * @param {object} classProperty - 类的原型
 * @param {string} key - 当前装饰的属性
 * @param {object} descriptor - 当前属性的描述器
 * @return {*}
 */
function readonly(classProperty, key, descriptor) {
    descriptor.writeable = false
}

function before(classProperty, key, descriptor) {
    const preSay = descriptor.value // 函数劫持
    descriptor.value = function () { // 将函数原有的逻辑进行包装
        console.log('before')
        preSay()
    }
}