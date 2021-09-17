let a = new Boolean(false) //[Boolean: false]
let b = Boolean(0)
console.log({})
console.log(a)
console.log(b)
if(a) {
  console.log('a')
}

if(b) {
  console.log('b')
}

if({}) {
  console.log('c')
}
console.log({})
console.log({} == true)
if({} == true) {
  console.log('d')
}