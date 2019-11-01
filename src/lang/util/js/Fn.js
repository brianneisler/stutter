/**
 * Note: This class is **immutable**
 */
class Fn {
  constructor(func, meta) {
    this.func = func
    this.meta = meta
  }

  get curried() {
    return this.meta.curried
  }

  get dispatcher() {
    return this.meta.dispatcher
  }

  get parameters() {
    return this.meta.parameters
  }

  get returns() {
    return this.meta.returns
  }
}

export default Fn
