import Any from './types/Any'
import Function from './types/Function'
import Type from './types/Type'
import defn from './defn'

const to = defn(
  'lang.to',
  {
    description: 'Convert `any` to an instance of the supplied constructor',
    since: 'v0.2.0'
  },

  [Type, Any],
  (type, any) => type.to(any),

  [Function, Any],
  (fn, any) => new fn(any)
)

export default to
