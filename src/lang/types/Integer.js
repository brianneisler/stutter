import anyIsInteger from '../util/anyIsInteger'
import anyToInteger from '../util/anyToInteger'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Integer = defineAny(
  'lang.Integer',
  'A type representing an number that is divisible by 1 with no remainder.',

  definitionToType({
    is: anyIsInteger,
    to: anyToInteger
  })
)

export default Integer
