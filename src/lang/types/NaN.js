import _NaN from '../classes/NaN'
import anyIsNaN from '../util/anyIsNaN'
import deftype from '../deftype'

const NaN = deftype(
  'lang.NaN',
  'A type representing javascript NaN.',

  {
    class: _NaN,
    is: anyIsNaN
  }
)

export default NaN
