import anyIsNil from '../util/anyIsNil'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Nil = defineAny(
  'lang.Nil',
  'A type representing a null or undefined value.',

  definitionToType({
    is: anyIsNil
  })
)

export default Nil
