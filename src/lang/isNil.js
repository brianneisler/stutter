// required
import Nil from './types/Nil'
import defn from './defn'
import is from './is'

const isNil = defn(
  'lang.isNil',
  {
    description: 'Checks if `any` is `null` or `undefined`',
    since: 'v0.2.0'
  },

  is(Nil)
)

export default isNil
