// 观察者模式
// 特点：发布订阅模式的发布者和订阅者是没有直接关系的
// 观察者模式的观察者和发布者是有直接联系的
class Subject {
  //发布者
  constructor() {
    this.state = 0
    this.observer = []
  }
  getState() {
    return this.state
  }
  setstate(state) {
    this.state = state
    this.notifyAllObserver()
  }
  addObserver(observer) {
    this.observer.push(observer)
  }
  notifyAllObserver() {
    this.observer.forEach((observer) => {
      observer.update()
    })
  }
}

class Observer {
  //观察者
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.addObserver(this)
  }
  update() {
    console.log(`${this.name} updata, state: ${this.subject.getState()}`)
  }
}

let sub = new Subject()
let obs1 = new Observer('obs1', sub)
let obs2 = new Observer('obs2', sub)

sub.setstate(2)
