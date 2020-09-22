import anyIsInteger from '../util/anyIsInteger'
import anyToInteger from '../util/anyToInteger'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Integer = defineAny(
  'lang.Integer',
  {
    description:
      'A type representing an number that is divisible by 1 with no remainder.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsInteger,
    to: anyToInteger
  })
)

export default Integer
