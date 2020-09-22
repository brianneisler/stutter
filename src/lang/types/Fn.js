import _Fn from '../classes/Fn'
import anyIsFn from '../util/anyIsFn'
import anyToFn from '../util/anyToFn'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Fn = defineAny(
  'lang.Fn',
  {
    description: 'A high-level, Stutter executable bit of code',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _Fn,
    is: anyIsFn,
    to: anyToFn
  })
)

export default Fn
