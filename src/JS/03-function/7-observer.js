// 观察者模式
// 特点：发布订阅模式的发布者和订阅者是没有直接关系的
// 观察者模式的观察者和发布者是有直接联系的

//发布者
class Subject {
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

//观察者
class Observer {
  constructor(subject, name) {
    this.name = name
    this.subject = subject
    this.subject.addObserver(this)
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

let sub = new Subject()
new Observer(sub, 'obs1')
new Observer(sub, 'obs2')

sub.setstate(2)
