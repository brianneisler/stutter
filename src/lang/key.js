import { Any, Key } from './types'
import { createKey } from './util'
import defn from './defn'

const key = defn(
  'lang.key',
  {
    description: 'Casts the values explicitly as a Key',
    since: 'v0.2.0'
  },

  [Any, () => Key],
  (any) => createKey(any)
)

export default key
