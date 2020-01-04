import Resolved from './types/Resolved'
import defn from './defn'
import is from './is'

const isResolved = defn(
  'lang.isResolved',
  {
    description: 'Determines if the value is a resolved value.',
    since: 'v0.2.0'
  },

  is(Resolved)
)

export default isResolved
