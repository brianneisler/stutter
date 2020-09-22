import anyIsPositiveInteger from '../util/anyIsPositiveInteger'
import anyToPositiveInteger from '../util/anyToPositiveInteger'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const PositiveInteger = defineAny(
  'lang.PositiveInteger',
  {
    description:
      'A type representing an number that is divisible by 1 with no remainder and greater then or equal to 0.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsPositiveInteger,
    to: anyToPositiveInteger
  })
)

export default PositiveInteger
