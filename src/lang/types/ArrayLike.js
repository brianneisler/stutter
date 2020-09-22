import anyIsArrayLike from '../util/anyIsArrayLike'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const ArrayLike = defineAny(
  'lang.ArrayLike',
  {
    description: 'A value that is indexed and has a length',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsArrayLike
  })
)

export default ArrayLike
