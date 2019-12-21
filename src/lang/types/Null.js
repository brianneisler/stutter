import anyIsNull from '../util/anyIsNull'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Null = defineAny(
  'lang.Null',
  'A type representing a `null` value.',

  definitionToType({
    is: anyIsNull
  })
)

export default Null
