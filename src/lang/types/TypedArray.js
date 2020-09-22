import anyIsTypedArray from '../util/anyIsTypedArray'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const TypedArray = defineAny(
  'lang.TypedArray',
  {
    description:
      'A TypedArray object describes an array-like view of an underlying binary data buffer.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsTypedArray
  })
)

export default TypedArray
