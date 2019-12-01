import anyIsPath from '../util/anyIsPath'
import deftype from '../deftype'

const Path = deftype(
  'lang.Path',
  'A type representing a path for accessing Keyed, Proped or Indexed values.',

  {
    is: anyIsPath
  }
)

export default Path
