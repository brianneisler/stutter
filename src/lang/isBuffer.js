import Buffer from './types/Buffer'
import defn from './defn'
import is from './is'

const isBuffer = defn(
  'lang.isBuffer',
  {
    description: 'Checks if `Any` is classified as a `Buffer` type.',
    since: 'v0.2.0'
  },

  is(Buffer)
)

export default isBuffer
