import ImmutableMap from './ImmutableMap'

/**
 * Note: This class is **immutable**
 */
class Namespace {
  constructor(name, mappings = ImmutableMap()) {
    this.name = name
    this.mappings = mappings
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
