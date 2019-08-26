import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Any = defineAny(
  'lang.Any',
  'A type representing any value',
  definitionToType({
    is: () => true,
    to: (any) => any
  })
)

export default Any
