import defn from './defn'
import { Null } from './types'

const noop = defn(
  'lang.noop',
  {
    description:
      'A function that performs no operation. Useful as a default placeholder function.',
    since: 'v0.1.0'
  },

  [() => Null],
  () => null
)

export default noop
