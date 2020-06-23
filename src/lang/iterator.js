import { Any, Iterator } from './types'
import { anyToIterator } from './util'
import defn from './defn'

const iterator = defn(
  'lang.iterator',
  {
    description: 'This method generates an iterator for the given value',
    since: 'v0.1.0'
  },

  [Any, () => Iterator],
  anyToIterator
)

export default iterator
