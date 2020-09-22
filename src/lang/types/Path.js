import _Path from '../classes/Path'
import anyIsPath from '../util/anyIsPath'
import anyToPath from '../util/anyToPath'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Path = defineAny(
  'lang.Path',
  {
    description:
      'A type representing a path for accessing Keyed, Proped or Indexed values.',
    since: 'v0.2.0'
  },

  definitionToType({
    class: _Path,
    is: anyIsPath,
    to: anyToPath
  })
)

export default Path
