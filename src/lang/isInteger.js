// required
import Integer from './types/Integer'
import defn from './defn'
import is from './is'

const isInteger = defn(
  'lang.isInteger',
  {
    description: 'Checks whether the given value is classified as an Integer',
    since: 'v0.2.0'
  },

  is(Integer)
)

export default isInteger
