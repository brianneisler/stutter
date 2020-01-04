import anyIsPrototype from '../util/anyIsPrototype'
import deftype from '../deftype'

const Prototype = deftype(
  'lang.Prototype',
  'A Prototype object is the object representing an object instances prototype chain',
  {
    is: anyIsPrototype
  }
)

export default Prototype
