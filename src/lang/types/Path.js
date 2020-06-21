import _Path from '../classes/Path'
import anyIsPath from '../util/anyIsPath'
import anyToPath from '../util/anyToPath'
import deftype from '../deftype'

const Path = deftype(
  'lang.Path',
  {
    description:
      'A type representing a path for accessing Keyed, Proped or Indexed values.',
    since: 'v0.2.0'
  },

  {
    class: _Path,
    is: anyIsPath,
    to: anyToPath
  }
)

export default Path
