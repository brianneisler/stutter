import anyIsInfinity from '../util/anyIsInfinity'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Infinity = defineAny(
  'lang.Infinity',
  {
    description:
      'A type representing an inifnity numeber (positive or negative).',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsInfinity
  })
)

export default Infinity
