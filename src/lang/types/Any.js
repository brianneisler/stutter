import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Any = defineAny(
  'lang.Any',
  {
    description: 'A type representing any value',
    since: 'v0.1.0'
  },
  definitionToType({
    is: () => true,
    to: (any) => any
  })
)

export default Any
