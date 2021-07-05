class Person {
  man() {
    const a = () => {
      console.log(this)
    }
    function b() {
      console.log(this)
    }
    a()
    b()
  }
}

const p = new Person()
p.man()
