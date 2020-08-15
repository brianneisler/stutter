class RingBuffer {
  constructor(overflowHandler, limit = 10) {
    this.array = new Array(limit)
    this.length = 0
    this.limit = limit
    this.overflowHandler = overflowHandler
    this.pushIndex = 0
    this.popIndex = 0
  }

  flush() {
    const items = []
    while (this.length) {
      items.push(this.take())
    }
    return items
  }

  isEmpty() {
    return this.length === 0
  }

  push(value) {
    this.array[this.pushIndex] = value
    this.pushIndex = (this.pushIndex + 1) % this.limit
    this.length++
  }

  take() {
    if (this.length != 0) {
      const value = this.array[this.popIndex]
      this.array[this.popIndex] = null
      this.length--
      this.popIndex = (this, this.popIndex + 1) % this.limit
      return value
    }
  }

  put(value) {
    if (this.length < this.limit) {
      this.push(value)
    } else if (this.overflowHandler) {
      this.overflowHandler(value)
    }
  }
}

export default RingBuffer
