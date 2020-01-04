import anyIsTypedArray from '../util/anyIsTypedArray'
import deftype from '../deftype'

const TypedArray = deftype(
  'lang.TypedArray',
  'A TypedArray object describes an array-like view of an underlying binary data buffer.',
  {
    is: anyIsTypedArray
  }
)

export default TypedArray
