import _Path from '../util/js/Path'
import anyIsPath from '../util/anyIsPath'
import anyToPath from '../util/anyToPath'
import deftype from '../deftype'

const Path = deftype(
  'lang.Path',
  'A type representing a path for accessing Keyed, Proped or Indexed values.',

  {
    class: _Path,
    is: anyIsPath,
    to: anyToPath
  }
)

export default Path
