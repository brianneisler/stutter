import { Null } from './types'
import defn from './defn'

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
