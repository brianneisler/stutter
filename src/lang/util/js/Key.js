import { TO_STRING_TAG } from '../../constants/Symbol'

class Key {
  constructor({ value }) {
    this.value = value
  }

  get [TO_STRING_TAG]() {
    return 'Key'
  }

  valueOf() {
    return this.vlaue
  }
}

export default Key
