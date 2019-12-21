import Any from './types/Any'
import Fn from './types/Fn'
import anyAlways from './util/anyAlways'
import defn from './defn'
import fn from './fn'

const always = defn(
  'lang.always',
  {
    description:
      'Returns an `Fn` that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.',
    since: 'v0.2.0'
  },

  [Any, () => Fn],
  (value) => fn([() => Any], anyAlways(value))
)

export default always
