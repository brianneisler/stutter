import Any from './types/Any'
import Array from './types/Array'
import Function from './types/Function'
import defn from './defn'

const apply = defn(
  'lang.apply',
  {
    description: 'Applies function `func` to the argument list `args`.',
    since: 'v0.1.0'
  },

  [Function, Array, () => Any],
  function (func, args) {
    return func.apply(this, args)
  },

  [Array, Function, () => Any],
  function (args, func) {
    return func.apply(this, args)
  }
)

export default apply
