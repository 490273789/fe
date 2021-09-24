var a = '10'

function b () {
  // console.log(this)
  console.log(a)
}

// function c (fn) {
//   var a = '20';
//   (function(){
//     fn()
//   }())  
// }

function c (fn) {
  var a = '20';
  fn() 
}

c(b)

