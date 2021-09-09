// 继承圣杯模式
function inherit1(Target, Origin) {
  function F() {}
  F.prototype = Origin.prototype
  Target.prototype = new F()
  Target.prototype.constructor = Target
  Target.prototype.uber = Object.prototype
}
Father.prototype.lastName = 'Deng'
function Father() {}

function Son() {}

var son1 = new Son()
var father1 = new Father()

// 雅虎封装
var inherit = (function () {
  function F() {}
  return function (Target, Origin) {
    F.prototype = Origin.prototype
    Target.prototype = new F()
    Target.prototype.constructor = Target
    Target.prototype.uber = Object.prototype
  }
})()
