import ImmutableMap from './ImmutableMap'
import SYMBOL_TO_STRING_TAG from '../../constants/SYMBOL_TO_STRING_TAG'

/**
 * Note: This class is **immutable**
 */
class Namespace {
  constructor(name, mappings = ImmutableMap()) {
    this.mappings = mappings
    this.name = name
  }

  get [SYMBOL_TO_STRING_TAG]() {
    return 'Namespace'
  }

  get(prop) {
    return this.mappings.get(prop)
  }

  set(prop, value) {
    return new Namespace(this.name, this.mappings.set(prop, value))
  }

  filter(func) {
    return this.mappings.valueSeq().filter(func)
  }

  toName() {
    return this.name
  }
}

export default Namespace
