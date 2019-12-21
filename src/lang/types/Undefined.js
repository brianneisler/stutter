import anyIsUndefined from '../util/anyIsUndefined'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Undefined = defineAny(
  'lang.Undefined',
  'A type representing an `undefined` value.',

  definitionToType({
    is: anyIsUndefined
  })
)

export default Undefined
