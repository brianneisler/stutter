import Promise from './types/Promise'
import defn from './defn'
import is from './is'

const isPromise = defn(
  'lang.isPromise',
  {
    description: 'Checks whether the given value is a Promise.',
    since: 'v0.2.0'
  },

  is(Promise)
)

export default isPromise
