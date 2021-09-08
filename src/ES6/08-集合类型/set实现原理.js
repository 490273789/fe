class MySet {
  constructor(iterator = []) {
    if (typeof iterator !== 'function') {
      throw new TypeError(`您提供的${iterator}不是可迭代对象！`)
    }
    this._data = []
    for (let item of iterator) {
      this.add(item)
    }
  }

  get size() {
    return this._data.length
  }

  add(data) {
    if (!this.has(data)) {
      this._data.push(data)
    }
  }

  has(data) {
    for (let item of this._data) {
      if (this.isEqual(data, item)) {
        return true
      }
    }
    return false
  }

  clear() {
    this._data.length = 0
  }

  delete(data) {
    for (let i = 0; i < this._data.length; i++) {
      if (this.isEqual(data, this._data[i])) {
        this._data.splice(i, 1)
        return true
      }
    }
    return false
  }

  /**
   *Set结构为可迭代属性，提供可迭代接口
   * @memberof MySet
   */
  *[Symbol.iterator]() {
    for (const item of this._data) {
      yield item
    }
  }

  /**
   *set的forEach方法第一个参数与第二个参数都返回的是set中的每一项
   * @param {*} callback 回调函数
   * @memberof MySet
   */
  forEach(callback) {
    for (const item of this._data) {
      callback(item, item, this)
    }
  }

  /**
   *比较两个值是否相等，+0 和 -0 使用 === 来比较，其他情况使用Object.is()来比较
   * @param {*: data1} 比较数据1
   * @param {*: data2} 比较数据2
   * @returns
   * @memberof MySet
   */
  isEqual(data1, data2) {
    if (data1 === 0 && data2 === 0) {
      return true
    }
    return Object.is(data1, data2)
  }
}
