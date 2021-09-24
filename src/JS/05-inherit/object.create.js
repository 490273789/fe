const object1 = {
  say() {
    console.log('hello')
  },
}

const object2 = Object.create(object1)

console.log(object2)

object2.say = () => {
  console.log('hello2')
}
object2.say()
object1.say()
console.log(object2)
